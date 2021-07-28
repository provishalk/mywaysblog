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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="ml-1"><Link to="/mywaysblog" className="text-decoration-none text-secondary">MyWays</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="my_navbar__navbarContent" isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink><Link to="/mywaysblog/login" className="text-decoration-none text-secondary">Login</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="/mywaysblog/register" className="text-decoration-none text-secondary">Register</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="/mywaysblog/addBlog" className="text-decoration-none text-secondary">AddBlog</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;