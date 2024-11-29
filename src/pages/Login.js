import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Login</h2>
          <div className="d-flex justify-content-center mb-4">
            <Link to="/login?type=buyer" className="btn btn-primary me-2">Buyer Login</Link>
            <Link to="/login?type=vendor" className="btn btn-secondary">Vendor Login</Link>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;