import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Share2, Menu, X, User as UserIcon, LogOut, FileText, Shield, List } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onOpenAuth: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '物品列表', path: '/items' },
    { name: '我要共享', path: '/share' },
    { name: '需求大厅', path: '/requests' },
    { name: '信用中心', path: '/credit' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110">
            <Share2 size={18} />
          </div>
          <h1 className="text-xl font-bold text-dark tracking-tight">
            智享<span className="text-primary">宿舍</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-primary ${
                isActive(link.path) ? 'text-primary' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <button
              onClick={onOpenAuth}
              className="hidden md:block px-5 py-2 rounded-full bg-primary text-white hover:bg-green-600 transition-all shadow-md hover:shadow-lg text-sm font-medium"
            >
              登录 / 注册
            </button>
          ) : (
            <div className="hidden md:flex items-center space-x-3 cursor-pointer group relative">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">{user.name}</p>
                <p className="text-xs text-primary font-medium">信用分: {user.credit}</p>
              </div>
              <img 
                src={user.avatar} 
                alt="Avatar" 
                className="w-10 h-10 rounded-full border-2 border-primary/20" 
              />
              
              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 hidden group-hover:block border border-gray-100 animate-fade-in">
                <Link to="/records" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary flex items-center">
                  <List size={16} className="mr-2" /> 借还记录
                </Link>
                <Link to="/credit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary flex items-center">
                  <Shield size={16} className="mr-2" /> 信用档案
                </Link>
                <div className="border-t my-1"></div>
                <button 
                  onClick={logout} 
                  className="w-full text-left px-4 py-2 text-sm text-danger hover:bg-red-50 flex items-center"
                >
                  <LogOut size={16} className="mr-2" /> 退出登录
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg z-50 animate-slide-up">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 font-medium border-b border-gray-50 ${
                  isActive(link.path) ? 'text-primary' : 'text-gray-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {!user ? (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full px-4 py-3 rounded-lg bg-primary text-white font-medium text-center"
              >
                立即登录
              </button>
            ) : (
              <div className="pt-2 border-t border-gray-100">
                 <div className="flex items-center mb-4">
                    <img src={user.avatar} className="w-8 h-8 rounded-full mr-2" alt="Avatar"/>
                    <div>
                        <p className="text-sm font-bold">{user.name}</p>
                        <p className="text-xs text-primary">信用分: {user.credit}</p>
                    </div>
                 </div>
                 <Link to="/records" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600">我的记录</Link>
                 <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="block py-2 text-sm text-danger w-full text-left">退出登录</button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
