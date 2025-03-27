import React from 'react';
import { Camera } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <Camera className="text-blue-400" size={24} />
          <span className="text-lg font-semibold text-white">Edithor</span>
        </div>
        <p className="mb-2">Proporcionando soluciones de seguridad confiables para empresas.</p> {/* Translated */}
        <p className="text-sm">
          &copy; {currentYear} Edithor. Todos los derechos reservados. {/* Translated */}
        </p>
        {/* Optional: Add social media links or other footer links here */}
        {/* <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-white">Política de Privacidad</a>
          <a href="#" className="hover:text-white">Términos de Servicio</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
