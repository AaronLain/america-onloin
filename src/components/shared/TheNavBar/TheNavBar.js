import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import firebase from 'firebase/app'
import 'firebase/auth';

import './TheNavBar.scss';

class TheNavBar extends React.Component {
  state = {
    isOpen: false,
  }

  logOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state;
    
    const buildTheNavBar = () => {
      const { authed } = this.props;
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/favorites'>Favorites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/newmeat'>New Meat</NavLink>
            </NavItem>
            <NavItem>
              <button className="btn btn-danger" onClick={this.logOut}>Logout</button>
            </NavItem>
          </Nav>
        );
      }
      return (
        <Nav className="ml-auto" navbar>
          <button className="btn btn-warning ml-auto" onClick={this.loginClickEvent}>Google Login</button>
        </Nav>
      );
    };

    return (
      <div className="DatNavbar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src="https://i.ibb.co/CwKJFp5/meat2.png" width="40" height="40" className="d-inline-block align-top" alt=""/>
            America Onloin
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            {buildTheNavBar()}
          </Collapse>
        </Navbar>
      </div>
    );
  } 
}

export default TheNavBar;
