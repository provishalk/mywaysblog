import './MyNavbar.scss'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
const MyNavbar = (props) => {
  const getNameFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? user.fullName : "User";
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const isLoggedIn = localStorage.getItem("user");
  const isAdmin = localStorage.getItem("admin");
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="ml-1"><Link to="/mywaysblog" className="text-decoration-none text-secondary">MyWays</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="my_navbar__navbarContent" isOpen={isOpen} navbar>
          <Nav navbar>
            {isAdmin ? <>
              <NavLink><Link to="/mywaysblog" className="text-decoration-none text-secondary" onClick={() => { localStorage.clear(); }}>Logout</Link></NavLink>
            </> : <>
              {isLoggedIn ? (
                <NavItem>
                  <NavLink><Link to="/mywaysblog" className="text-decoration-none text-secondary" onClick={() => { localStorage.clear(); }}>Logout</Link></NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink><Link to="/mywaysblog/login" className="text-decoration-none text-secondary">Login</Link></NavLink>
                </NavItem>
              )}
              {isLoggedIn ? (
                <NavItem>
                  <NavLink>{getNameFromLocalStorage()}</NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink><Link to="/mywaysblog/register" className="text-decoration-none text-secondary">Register</Link></NavLink>
                </NavItem>
              )
              }
            </>}
            {isAdmin ? (
              <NavItem>
                <NavLink><Link to="/mywaysblog/admin/home" className="text-decoration-none text-secondary">Admin</Link></NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink><Link to="/mywaysblog/admin" className="text-decoration-none text-secondary">Admin</Link></NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}

export default MyNavbar;