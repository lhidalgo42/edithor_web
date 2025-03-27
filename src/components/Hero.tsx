import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-screen flex items-center justify-center pt-16"> {/* Added pt-16 for header offset */}
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587579704900-ac52586d14d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Soluciones de Seguridad Avanzadas
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Protegemos lo que más importa con tecnología de vigilancia de última generación y servicio experto.
        </p>
        <a
          href="#services"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition duration-300"
        >
          Descubre Nuestros Servicios
        </a>
      </div>
    </section>
  );
};

export default Hero;
