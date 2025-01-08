import { Link } from 'react-router-dom';
import { Home, Briefcase, Info, Mail } from 'lucide-react';

const MainNavbar = () => {
  return (
    <div className="flex justify-center items-center mb-10 mt-6 py-1 px-2 bg-gray-300 bg-opacity-20 text-white shadow-md rounded-full max-w-xs m-auto">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center justify-center p-2 hover:text-primary">
          <Home className="w-6 h-6" />
        </Link>
        <div className="w-px h-6 bg-white"></div>
        <Link to="/projects" className="flex items-center justify-center p-2 hover:text-primary">
          <Briefcase className="w-6 h-6" />
        </Link>
        <div className="w-px h-6 bg-white"></div>
        <Link to="/about" className="flex items-center justify-center p-2 hover:text-primary">
          <Info className="w-6 h-6" />
        </Link>
        <div className="w-px h-6 bg-white"></div>
        <Link to="/contact" className="flex items-center justify-center p-2 hover:text-primary">
          <Mail className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}

export default MainNavbar;