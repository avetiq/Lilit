import React from "react";
import { Navbar, Nav, Dropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { parseCookies, destroyCookie } from "nookies";

function NavMenu(props) {
  const { classes } = props;
  //activeClassName avtomat haskanuma vor ejn enq, et style y talisa

  const getRightPartName = () => {
    const cookies = parseCookies();
    return cookies.username ? cookies.username : "Մուտք";
  };

  const logOut = () => {
    //api calls also

    destroyCookie(null, "username");
    var url = window.location.pathname;
    url = url.replace(/[a-z\/ \-]*/, "/");
    console.log(url);
    window.location.assign(url);
  };

  return (
    <Navbar bg="dark" variant="dark" className={classes.main}>
      <div>
        <Nav>
          <NavLink
            to="/"
            activeClassName={classes.active}
            exact
            className={classes.link}
          >
            Գլխավոր
          </NavLink>

          <NavLink
            to="/about-us"
            activeClassName={classes.active}
            exact
            className={classes.link}
          >
            Մեր Մասին
          </NavLink>

          <NavLink
            to="/contact-us"
            activeClassName={classes.active}
            exact
            className={classes.linkRight}
          >
            Կապ
          </NavLink>

          <Dropdown
            style={{
              position: "absolute",
              right: 18,
              top: 5,
            }}
          >
            <Dropdown.Toggle variant="info" id="dropdown-basic" style={{background: '#3b8053' , border: '#3b8053'}}>
              Կարգավորումներ
            </Dropdown.Toggle>

            <Dropdown.Menu style={{color: '#3b8053'}} >
              {getRightPartName() === "Մուտք" ? (
                <Dropdown.Item className={classes.signUp}>
                  <NavLink to="/log-in" exact className={classes.signUp}>
                    Մուտք
                  </NavLink>
                </Dropdown.Item>
              ) : (
                <>
                  <Dropdown.Item style={{color: '#3b8053'}} >
                    <NavLink to="/personal-page" exact >
                      Անձնական էջ
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item style={{color: '#3b8053'}}>
                    <Button onClick={logOut}>Ելք</Button>
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </div>
    </Navbar>
  );
}

export default withStyles(styles)(NavMenu);
