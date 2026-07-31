import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070b14] cyber-grid-bg">
      <div className="text-center px-6">
        <h1 className="text-6xl font-extrabold gradient-text mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page introuvable</p>
        <Link
          to="/"
          className="inline-flex px-6 py-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium hover:opacity-90 transition-opacity"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
