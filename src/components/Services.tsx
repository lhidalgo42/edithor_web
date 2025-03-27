import React from 'react';
import { Video, ShieldCheck, Settings } from 'lucide-react';

const services = [
  {
    icon: <Video size={40} className="text-blue-400 mb-4" />,
    title: 'Instalación de Cámaras CCTV',
    description: 'Instalación profesional de sistemas de CCTV de alta definición para interiores y exteriores.',
  },
  {
    icon: <ShieldCheck size={40} className="text-blue-400 mb-4" />,
    title: 'Monitoreo de Seguridad',
    description: 'Servicios de monitoreo 24/7 para garantizar una respuesta rápida ante cualquier incidente.',
  },
  {
    icon: <Settings size={40} className="text-blue-400 mb-4" />,
    title: 'Mantenimiento y Soporte',
    description: 'Planes de mantenimiento preventivo y soporte técnico para asegurar el óptimo funcionamiento de sus sistemas.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
