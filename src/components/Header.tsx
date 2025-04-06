import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Home, Mail, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">DevBlog</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/blog" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <BookOpen className="h-5 w-5" />
              <span>Blog</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <User className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;