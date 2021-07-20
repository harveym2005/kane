import React, { useContext, Fragment } from 'react';
import {
  Container,
  Segment,
  Header,
  Label,
  Menu,
  Dropdown,
  Image,
  Input,
  Button,
} from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import LoginForm from '../user/LoginForm';
import RegisterForm from '../user/RegisterForm';
import { observer } from 'mobx-react-lite';


const HomePage = () => {
  const rootStore = useContext(RootStoreContext);
  const { isLoggedIn, user , logout } = rootStore.userStore;
  // const { user, logout } = rootStore.userStore;
  const {openModal} = rootStore.modalStore;
  return (

    // <Segment inverted textAlign="center" vertical className="masthead">
    //   <Container text>
        
    //     {isLoggedIn && user ? (
    //       <Fragment>
    //         <Header
    //           as="h2"
    //           inverted
    //           content={`Welcome back ${user.displayName}`}
    //         />
    //         <Button as={Link} to="/activities" size="huge" inverted>
    //           Go to activities!
    //         </Button>
    //       </Fragment>
    //     ) : (
    //        <Fragment>
    //         {/* // <Header as="h2" inverted content="Welcome to Kiri" /> */}
    //         <Label onClick={() => openModal(<LoginForm />)} size="huge" inverted>
    //           Login
    //         </Label>
    //         {/* <Button onClick={() => openModal(<RegisterForm />)} size="huge" inverted>
    //           Register
    //         </Button> */}
    //      </Fragment>
    //     )}
    //   </Container>
    //   <Container text style={{color:"Black"}}>
      
    //   </Container>
    // </Segment>
 
// export const NavBar: React.FC = () => {
//   const rootStore = useContext(RootStoreContext);
//   const { user, logout } = rootStore.userStore;
//   const {openModal} = rootStore.modalStore;

  // return (
    <div className="Homeback">
       
    <div className="ui large inverted pointing secondary menu">
        <div className="ui container">
          {/* <a href="#" style="margin-top: 10px;">
            <img src="images/LogoBlackGold.svg" style="width: 200px;" alt="">
          </a> */}
          <Image class="ui mini image"
            src="/assets/LogoRealty1.png"
            alt="logo"
            style={{ marginBottom: 12, width: "400px", height: "200px"}}
          />
          <div className="right item" style={{marginTop:"5em"}}>
            <a href="#"className="active item "> Home </a>
            <a href="#" className="item "> About </a>
            <a href="#" className="item "> Properties </a>
            <a href="#" className="item"> Contact Us </a>
            <a onClick={() => openModal(<LoginForm />)} className="loginMenu" role="button"> Log in </a>
          </div>
        </div>
      </div>
          
      <div className="ui text container">
        <h1 className="ui inverted header h1" >
          Own the Home Meant for You
        </h1>
        <h2 className="ui inverted header h2">Search. See. Love.</h2>
        <div className="ui selection dropdown">
          <input type="hidden" name="gender" />
          <i className="dropdown icon"></i>
          <div className="default text">Location</div>
          <div className="menu">
            <div className="item" data-value="1">Agusan del Norte</div>
            <div className="item" data-value="0">Agusan del Sur</div>
            <div className="item" data-value="0">Surigao del Norte</div>
            <div className="item" data-value="0">Surigao del Sur</div>
          </div>
        </div>
        <div className="ui selection dropdown">
          <input type="hidden" name="gender" />
          <i className="dropdown icon"></i>
          <div className="default text">Price Range</div>
          <div className="menu">
            <div className="item" data-value="1">2,000,000 - 3,000,000</div>
            <div className="item" data-value="0">4,000,000 - 6,000,000</div>
            <div className="item" data-value="0">6,000,000 - 9,000,000</div>
            <div className="item" data-value="0">10,000,000 - 15,000,000</div>
            <div className="item" data-value="0">More than 16M</div>
          </div>
        </div>
        <button className="ui large primary button">Search</button>
      </div>
     <div className="ui vertical segmentt">
       <div className="ui container four stackable middle aligned grid">
         <div className="row"></div>
           <div className="ui centered special cards">
            {/* <!-- 1 --> */}
            <div className="card">
              <div className="blurring dimmable image">
                <div className="ui dimmer">
                  <div className="content">
                    <div className="center">
                      <div className="ui inverted button">View More</div>
                    </div>
                  </div>
                </div>

                <Image class="ui mini image"
                  src="/assets/images/houses/ampayon.jpg"
                  alt="logo" />
              </div>
              <div className="content">
                <a className="header">Camella Ampayon</a>
                <div className="meta">
                  <span className="date">Ampayon, Butuan City</span>
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="users icon"></i>
                  2 Rated
                </a>
              </div>
            
            </div>

             {/* <!-- 2 --> */}
             <div className="card">
              <div className="blurring dimmable image">
                <div className="ui dimmer">
                  <div className="content">
                    <div className="center">
                      <div className="ui inverted button">View More</div>
                    </div>
                  </div>
                </div>

                <Image class="ui mini image"
                  src="/assets/images/houses/ampayon.jpg"
                  alt="logo" />
              </div>
              <div className="content">
                <a className="header">Camella Ampayon</a>
                <div className="meta">
                  <span className="date">Ampayon, Butuan City</span>
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="users icon"></i>
                  2 Rated
                </a>
              </div>
            
            </div>

          {/* <!-- 3 --> */}
          <div className="card">
              <div className="blurring dimmable image">
                <div className="ui dimmer">
                  <div className="content">
                    <div className="center">
                      <div className="ui inverted button">View More</div>
                    </div>
                  </div>
                </div>

                <Image class="ui mini image"
                  src="/assets/images/houses/ampayon.jpg"
                  alt="logo" />
              </div>
              <div className="content">
                <a className="header">Camella Ampayon</a>
                <div className="meta">
                  <span className="date">Ampayon, Butuan City</span>
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="users icon"></i>
                  2 Rated
                </a>
              </div>
            
            </div>

            {/* <!-- 4 --> */}
            <div className="card">
              <div className="blurring dimmable image">
                <div className="ui dimmer">
                  <div className="content">
                    <div className="center">
                      <div className="ui inverted button">View More</div>
                    </div>
                  </div>
                </div>

                <Image class="ui mini image"
                  src="/assets/images/houses/ampayon.jpg"
                  alt="logo" />
              </div>
              <div className="content">
                <a className="header">Camella Ampayon</a>
                <div className="meta">
                  <span className="date">Ampayon, Butuan City</span>
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="users icon"></i>
                  2 Rated
                </a>
              </div>
            
            </div>

          </div>
        </div>  
     </div>
     
     <div className="ui inverted vertical segment">
      <div className="ui container">
        <div className="ui inverted stackable divided grid">
          <div className="row">
            <div className="three wide column">
              <h4 className="ui inverted header">About</h4>
              <div className="ui inverted link list">Sitemap</div>
              <div className="ui inverted link list">Contact Us</div>
              <div className="ui inverted link list">Plans</div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Services</h4>
              <div className="ui inverted link list">Reservations</div>
              <div className="ui inverted link list">Book</div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Copyright 2021</h4>
              <div className="ui inverted link list">Kane Realty</div>
            </div>
          </div>
        </div>
      </div>
    </div>

     </div>

   
          
            
       
  );
};

export default HomePage;
