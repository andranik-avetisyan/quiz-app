import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userAction'

export const NavbarComponent = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" className="navbar-brand">
        Quiz Tracker
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {user ? (
          <>
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">
                Quizzes
              </Link>
              {user.isAdmin && <Link to="/create" className="nav-link">
                Create Quiz
              </Link>}
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link to="/" className="navbar-brand" onClick={handleLogout}>
                Logout
              </Link>
            </Nav>
          </>
        ) : (
            <Nav className="ml-auto">
              <Link to="/login" className="navbar-brand">
                Login
            </Link>
              <Link to="/register" className="navbar-brand">
                Register
            </Link>
            </Nav>
          )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
