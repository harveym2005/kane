﻿using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext: IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Value> Values { get; set; }
        public DbSet<Activity> Activities { get; set; }
        public DbSet<UserActivity> UserActivities { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<PropertyType> PropertyTypes { get; set; }
        public DbSet<Property> Properties { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Payment> Payments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Value>()
                .HasData(
                    new Value {Id = 1, Name = "Value 101"},
                    new Value {Id = 2, Name = "Value 102"},
                    new Value {Id = 3, Name = "Value 103"}
                );

            builder.Entity<UserActivity>(x => x.HasKey(ua => 
                new {ua.AppUserId, ua.ActivityId}));

            builder.Entity<UserActivity>()
                .HasOne(u => u.Appuser)
                .WithMany(a => a.UserActivities)
                .HasForeignKey(u => u.AppUserId);

            builder.Entity<UserActivity>()
                .HasOne(a => a.Activity)
                .WithMany(u => u.UserActivities)
                .HasForeignKey(a => a.ActivityId);

            // builder.Entity<Transaction>(x => x.HasKey(t =>
            //     new { 
            //         t.PropertyTypeId, 
            //         t.PropertyId, 
            //         t.ClientId }
            // ));

            builder.Entity<PropertyType>()
                .HasMany(p => p.Properties)
                .WithOne();

            builder.Entity<Transaction>()
                .HasOne(pt => pt.PropertyType)
                .WithMany(t => t.Transactions)
                .HasForeignKey(pt => pt.PropertyTypeId);

            builder.Entity<Transaction>()
                .HasOne(p => p.Property)
                .WithMany(t => t.Transactions)
                .HasForeignKey(p => p.PropertyId);
            
            builder.Entity<Transaction>()
                .HasOne(c => c.Client)
                .WithMany(t => t.Transactions)
                .HasForeignKey(c => c.ClientId);
            
            builder.Entity<Payment>()
                .HasOne(t => t.Transaction)
                .WithMany(p => p.Payments)
                .HasForeignKey(t => t.TransactionId);
            
            builder.Entity<Payment>()
                .HasOne(au => au.AppUser)
                .WithMany(p => p.Payments)
                .HasForeignKey(au => au.ReceivedById);

            
        }

    }
}
