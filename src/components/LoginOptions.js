import React from 'react';
import { Link } from 'react-router-dom';

function LoginOptions() {
  return (
    <div className="login-options text-center">
      <h2 className="mb-4">Choose Login Type</h2>
      <div className="d-grid gap-3 col-6 mx-auto">
        <Link to="/login/buyer" className="btn btn-primary btn-lg">Buyer Login</Link>
        <Link to="/login/vendor" className="btn btn-secondary btn-lg">Vendor Login</Link>
      </div>
    </div>
  );
}

export default LoginOptions;