import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="Equipo de Edithor trabajando"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Sobre Nosotros
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              En Edithor, nos dedicamos a proporcionar soluciones de seguridad integrales y confiables para hogares y empresas. Con años de experiencia en la industria, nuestro equipo de expertos está comprometido con la excelencia y la satisfacción del cliente.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Utilizamos tecnología de punta y las mejores prácticas para diseñar e implementar sistemas de seguridad personalizados que se adaptan a las necesidades específicas de cada cliente. Nuestra misión es brindarle tranquilidad sabiendo que su propiedad está protegida.
            </p>
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300 inline-block"
            >
              Contáctanos Hoy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
