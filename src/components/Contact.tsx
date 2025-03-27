import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Ponte en Contacto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Envíanos un Mensaje</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Correo Electrónico</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Empresa (Opcional)</label>
                <input type="text" id="company" name="company" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensaje</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"></textarea>
              </div>
              {/* CAPTCHA Placeholder */}
              <div className="bg-gray-700 border border-gray-600 rounded-md p-4 text-center text-gray-400">
                [ Espacio reservado para CAPTCHA ]
                {/* You will need to integrate a CAPTCHA library here (e.g., hCaptcha, reCAPTCHA) */}
                {/* The site key will come from environment variables */}
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold transition duration-300 w-full md:w-auto"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-400 flex-shrink-0" size={24} />
                <p className="text-gray-300">Calle Seguridad 123, Oficina 400<br />Ciudad Tecnológica, ST 54321</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={24} />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400 transition duration-300">(123) 456-7890</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={24} />
                <a href="mailto:info@edithor.com" className="text-gray-300 hover:text-blue-400 transition duration-300">info@edithor.com</a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-semibold mb-2 text-blue-300">Horario de Atención</h4>
                <p className="text-gray-400">Lunes - Viernes: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-400">Sábado - Domingo: Cerrado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
