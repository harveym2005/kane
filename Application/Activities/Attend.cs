using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class Attend
    {
        public class Command : IRequest
        {
           public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Unit> Handle(Command request,
                CancellationToken cancellationToken)
            {
                // Finds the Activity
                var activity = await _context.Activities.FindAsync(request.Id);

                if (activity == null)
                    throw new RestException(HttpStatusCode.NotFound, 
                        new {Activity = "Could not find activity"});

                // Gets the current User
                var user = await _context.Users.SingleOrDefaultAsync(x => 
                    x.UserName == _userAccessor.GetCurrentUsername());

                // Finds if already attends the Activity
                var attendance = await _context.UserActivities
                    .SingleOrDefaultAsync(x => x.ActivityId == activity.Id && 
                        x.AppUserId == user.Id);

                if (attendance != null)
                    throw new RestException(HttpStatusCode.BadRequest, 
                        new {Attendance = "Already attending this activity"});

                // If not attended, creates a UserActivity object
                attendance = new UserActivity
                {
                    Activity = activity,
                    Appuser = user,
                    IsHost = false,
                    DateJoined = DateTime.Now
                };

                // Saves the attendance to dbcontext
                _context.UserActivities.Add(attendance);

                // Saves changes in db
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}