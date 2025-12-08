import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import Items from './pages/Items';
import Share from './pages/Share';
import Requests from './pages/Requests';
import Credit from './pages/Credit';
import Records from './pages/Records';

const AppContent: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar onOpenAuth={() => setIsAuthModalOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenAuth={() => setIsAuthModalOpen(true)} />} />
            <Route path="/items" element={<Items />} />
            <Route path="/share" element={<Share />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/records" element={<Records />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
        
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      </div>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
