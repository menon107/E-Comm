import React from 'react';
import { Link } from 'react-router-dom';

function SignupOptions() {
  return (
    <div className="signup-options text-center">
      <h2 className="mb-4">Choose Signup Type</h2>
      <div className="d-grid gap-3 col-6 mx-auto">
        <Link to="/signup/buyer" className="btn btn-primary btn-lg">Buyer Signup</Link>
        <Link to="/signup/vendor" className="btn btn-secondary btn-lg">Vendor Signup</Link>
      </div>
    </div>
  );
}

export default SignupOptions;