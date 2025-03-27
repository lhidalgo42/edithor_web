import React from 'react';

// Placeholder client data - replace with actual client names/logos
const clients = [
  { name: 'Empresa Alfa', logoUrl: '' }, // Replace '' with actual logo URL or use text
  { name: 'Corporación Beta', logoUrl: '' },
  { name: 'Grupo Gamma', logoUrl: '' },
  { name: 'Industrias Delta', logoUrl: '' },
  { name: 'Soluciones Epsilon', logoUrl: '' },
  { name: 'Tecnologías Zeta', logoUrl: '' },
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Nuestros Clientes
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Estamos orgullosos de trabajar con una amplia gama de empresas que confían en nuestras soluciones de seguridad.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center p-4 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition duration-300">
              {client.logoUrl ? (
                <img src={client.logoUrl} alt={client.name} className="max-h-12" />
              ) : (
                <span className="text-gray-500 font-semibold text-center">{client.name}</span> // Fallback text if no logo URL
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
