
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import classes from './style.module.css';

function NavMenu(){

    //activeClassName avtomat haskanuma vor ejn enq, et style y talisa
    return(
        <Navbar bg="dark" variant="dark" className={classes.main}>
        <Nav>

          <NavLink 
          to='/' 
          activeClassName={classes.active}
          exact
          className={classes.link}
          >
          Home
          </NavLink>

          <NavLink
          to='/about-us'
          activeClassName={classes.active}
          exact
          className={classes.link}
            >
            About us
          </NavLink>

          <NavLink
          to='/contact-us'
          activeClassName={classes.active}
          exact
          className={classes.linkRight}
          >
          Contact us
          </NavLink>

        </Nav>
      </Navbar>
    );
};

export default NavMenu;