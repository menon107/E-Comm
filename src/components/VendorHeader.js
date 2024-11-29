import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Dropdown, Form, FormControl, Button, Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

function VendorHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="vendor-header">
      <Navbar bg="dark" variant="dark" expand="lg" expanded={isExpanded} onToggle={() => setIsExpanded(!isExpanded)}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/vendor" className="me-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Campus Cart Vendor
            </motion.div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="vendor-navbar-nav" />
          <Navbar.Collapse id="vendor-navbar-nav">
            <Form className="d-flex flex-grow-1 mx-4">
              <FormControl
                type="search"
                placeholder="Search your products"
                className="me-2 flex-grow-1"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="ms-auto">
              <Dropdown align="end">
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  {user?.username || 'Account'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/vendor">Dashboard</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/vendor/listing">Listings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <motion.nav 
        className="vendor-categories bg-light py-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <ul className="list-unstyled d-flex justify-content-between m-0">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/vendor" className="text-dark text-decoration-none">Dashboard</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/vendor/listing" className="text-dark text-decoration-none">Listings</Link>
            </motion.li>
          </ul>
        </Container>
      </motion.nav>
    </header>
  );
}

export default VendorHeader;