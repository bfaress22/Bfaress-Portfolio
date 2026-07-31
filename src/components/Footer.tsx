const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="gradient-text font-semibold">Bilal Faress</span>. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm text-center md:text-right">
            Transformation Digitale
            <span className="text-neon-blue"> · </span>
            IA
            <span className="text-neon-purple"> · </span>
            Automatisation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
