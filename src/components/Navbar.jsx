import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-400 border-b border-gray-100 py-4 px-8 flex justify-between items-center sticky top-0 z-50 font-montserrat">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-ypora-dark font-black text-3xl tracking-tighter">Distribución</span>
        
        <a 
        href="/" 
        className="text-ypora-green font-black text-3xl tracking-tighter ml-1 underline decoration-ypora-red decoration-4 hover:opacity-80 transition-opacity cursor-pointer"
        >YPORA
        </a>

      </div>

      {/* Menú de Links tipo "Pastilla" */}
      <div className="hidden md:flex gap-4">
        {['Alcance', 'Nosotros', 'Servicios'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="px-5 py-2 rounded-full text-ypora-dark font-bold text-2xl transition-all duration-300 hover:bg-ypora-green hover:text-white hover:shadow-lg active:scale-90"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Botón WhatsApp
      <button className="bg-ypora-red text-white px-7 py-2.5 rounded-full font-black text-sm hover:bg-red-600 transition-all shadow-xl hover:shadow-red-200 active:scale-95">
        PEDIR AHORA
      </button> */}
    </nav>
  );
};

export default Navbar;