import { FolderGit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { WebRoutes } from '../routes/WebRoutes';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="px-6 py-3 flex items-center justify-between">        
        <div className="flex items-center space-x-1">
          <span className="text-white bg-indigo-600 p-2 rounded  "><FolderGit2 size={18} /></span>
          <div className="text-white text-2xl font-extrabold tracking-tight select-none">
            Git<span className="text-indigo-400">Docs</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button onClick={() => navigate(WebRoutes.AUTH())} className="text-gray-300 hover:cursor-pointer hover:text-white text-sm font-medium px-3 py-1 transition">
            Sign in
          </button>
          <button onClick={() => navigate(WebRoutes.AUTH())} className="bg-indigo-600 hover:cursor-pointer hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-shadow shadow-indigo-600/20 shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
