import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendorHeader from './VendorHeader';
import VendorHome from '../pages/VendorHome';
import VendorListingForm from './VendorListingForm';

function VendorDashboard() {
  return (
    <div className="vendor-dashboard">
      <VendorHeader />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<VendorHome />} />
          <Route path="/listing" element={<VendorListingForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default VendorDashboard;