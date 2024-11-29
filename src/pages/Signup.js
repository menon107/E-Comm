import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

function Signup() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Sign Up</h2>
          <div className="d-flex justify-content-center mb-4">
            <Link to="/signup?type=buyer" className="btn btn-primary me-2">Buyer Signup</Link>
            <Link to="/signup?type=vendor" className="btn btn-secondary">Vendor Signup</Link>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default Signup;