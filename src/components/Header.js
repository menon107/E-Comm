import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Dropdown, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-light">
      <div className="container">
        {/* Upper part of the header */}
        <div className="d-flex justify-content-between align-items-center py-3">
          <Link to="/" className="text-dark text-decoration-none">
            <h1 className="h4 m-0">Campus Cart</h1>
          </Link>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="d-flex align-items-center">
            {user ? (
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Account
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/orders">My Orders</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/order-history">Order History</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link to="/login" className="btn btn-outline-primary">Login</Link>
            )}
            <Link to="/cart" className="btn btn-outline-primary ms-2">Cart</Link>
          </div>
        </div>
      </div>
      
      {/* Lower part of the header (navbar) */}
      <nav className="bg-dark py-2">
        <div className="container">
          <ul className="list-unstyled d-flex justify-content-between m-0">
            <li><Link to="/bakery" className="text-light text-decoration-none">Bakery</Link></li>
            <li><Link to="/dairy" className="text-light text-decoration-none">Dairy</Link></li>
            <li><Link to="/electronics" className="text-light text-decoration-none">Electronics</Link></li>
            <li><Link to="/beverages" className="text-light text-decoration-none">Beverages</Link></li>
            <li><Link to="/fast-food" className="text-light text-decoration-none">Fast Food</Link></li>
            <li><Link to="/poultry" className="text-light text-decoration-none">Poultry</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;