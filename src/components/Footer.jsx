import React from 'react';
import InstagramIcon from '../assets/icons/instagram.png';
import FacebookIcon from '../assets/icons/facebook.png';
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 font-montserrat">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Branding */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-black tracking-tighter mb-6">
              DISTRIBUCIÓN <span className="text-ypora-green">YPORA</span>
            </h2>
            <p className="text-gray-400 font-medium leading-relaxed">
              Llevando pureza y bienestar a cada rincón de Corrientes. Agua de calidad premium para tu hogar y empresa.
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-ypora-green">Navegación</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#alcance" className="hover:text-white transition-colors">Nuestro Alcance</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-ypora-green">Contacto</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                Corrientes Capital, Argentina
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📱</span>
                379 4757524
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                contacto@ypora.com.ar
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-ypora-green">Seguinos</h4>
            <div className="flex gap-4">
               <a 
                href="https://www.facebook.com/share/1bKJhJZYnL/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-ypora-green transition-all duration-300"
              >
                <img 
                  src={InstagramIcon} 
                  alt="Instagram YPORA" 
                  className="w-6 h-6 object-contain"
                />
              </a>
              <a 
                href="https://www.facebook.com/share/1bKJhJZYnL/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-ypora-green transition-all duration-300"
              >
                <img 
                  src={FacebookIcon} 
                  alt="Facebook YPORA" 
                  className="w-6 h-6 object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Línea Divisoria */}
        <div className="h-px w-full bg-white/10 mb-8"></div>

        {/* Copyright y Créditos */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-500 text-sm font-bold uppercase tracking-widest">
          <p>© 2026 DISTRIBUCIÓN YPORA. TODOS LOS DERECHOS RESERVADOS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;