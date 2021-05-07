
import React from 'react';
import {Navbar, Nav, Dropdown, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { parseCookies, setCookie, destroyCookie  } from 'nookies'

function NavMenu(props){
  const {classes} = props;
    //activeClassName avtomat haskanuma vor ejn enq, et style y talisa
    
    const getRightPartName = () => {
      const cookies = parseCookies();
      return cookies.username ? cookies.username : 'Մուտք';
    }

    const logOut = () => {
      //api calls also

      destroyCookie(null, 'username');
    }

    return(
        <Navbar bg="dark" variant="dark" className={classes.main}>
        <div>
        <Nav>

          <NavLink 
          to='/' 
          activeClassName={classes.active}
          exact
          className={classes.link}
          >
          Գլխավոր
          </NavLink>

          <NavLink
          to='/about-us'
          activeClassName={classes.active}
          exact
          className={classes.link}
            >
            Մեր Մասին
          </NavLink>

          <NavLink
          to='/contact-us'
          activeClassName={classes.active}
          exact
          className={classes.linkRight}
          >
          Կապ
          </NavLink>
          
          <Dropdown style={{
            position: 'absolute',
            right: 18,
            top: 5
          }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Կարգավորումներ
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {getRightPartName() === 'Մուտք' ?
             <Dropdown.Item >
             <NavLink
              to='/log-in'
              exact
              >
              Մուտք
              </NavLink>
              </Dropdown.Item> :
              <>
             <Dropdown.Item >
             <NavLink
              to='/personal-page'
              exact
              >
              Անձնական էջ
              </NavLink>
             </Dropdown.Item>
             <Dropdown.Item >
             <Button
             onClick={logOut}
             >
             Ելք
             </Button>
             </Dropdown.Item>
             </>
          }
          </Dropdown.Menu>
        </Dropdown>
        </Nav>
        
        
        </div>
      </Navbar>
    );
};

export default withStyles(styles)(NavMenu);