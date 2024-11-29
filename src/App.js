import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Bakery from './pages/Bakery';
import Dairy from './pages/Dairy';
import Electronics from './pages/Electronics';
import Beverages from './pages/Beverages';
import FastFood from './pages/FastFood';
import Poultry from './pages/Poultry';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VendorHome from './pages/VendorHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/vendor/*" element={<VendorHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={
            <>
              <Header />
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/bakery" element={<Bakery />} />
                  <Route path="/dairy" element={<Dairy />} />
                  <Route path="/electronics" element={<Electronics />} />
                  <Route path="/beverages" element={<Beverages />} />
                  <Route path="/fast-food" element={<FastFood />} />
                  <Route path="/poultry" element={<Poultry />} />
                </Routes>
              </MainLayout>
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;