/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Activity, Shield, Mail } from 'lucide-react';

function Navigation() {
  return (
    <nav className="bg-quant-surface border-b border-quant-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Activity className="w-6 h-6 text-accent" />
            <span className="text-xl font-bold text-slate-100">Nexus Quant Engine</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className="text-slate-300 hover:text-accent transition-colors flex items-center space-x-2"
            >
              <Activity className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/about" 
              className="text-slate-300 hover:text-accent transition-colors flex items-center space-x-2"
            >
              <Shield className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link 
              to="/contact" 
              className="text-slate-300 hover:text-accent transition-colors flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-quant-bg text-slate-100 font-sans">
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}
