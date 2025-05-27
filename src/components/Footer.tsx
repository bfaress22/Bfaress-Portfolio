
const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 <span className="gradient-text font-semibold">Bilal Faress</span>. 
              Tous droits réservés.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              Conçu avec passion • 
              <span className="text-neon-blue"> Innovation</span> & 
              <span className="text-neon-purple"> Créativité</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
