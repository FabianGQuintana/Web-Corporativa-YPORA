import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 border-b border-gray-100 py-4 px-8 sticky top-0 z-50 font-montserrat shadow-sm">
      <div className="flex justify-between items-center">
        {/* Logo - Manteniendo tus tamaños exactos */}
        <div className="flex items-center">
          <span className="text-ypora-dark font-black text-3xl tracking-tighter">Distribución</span>
          <a href="/" className="text-ypora-green font-black text-3xl tracking-tighter ml-1 underline decoration-ypora-red decoration-4 hover:opacity-80 transition-opacity">
            YPORA
          </a>
        </div>

        {/* Botón Hamburguesa (Solo móvil) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-ypora-dark focus:outline-none">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Links tipo "Pastilla" - Respetando text-2xl y sin botones extras */}
        <div className="hidden md:flex gap-4">
          {['Alcance', 'Visión', 'Nosotros', 'Servicios'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="px-5 py-2 rounded-full text-ypora-dark font-bold text-2xl transition-all duration-300 hover:bg-ypora-green hover:text-white hover:shadow-lg active:scale-90"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Menú Desplegable Móvil (Mantiene tu diseño de pastilla) */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 animate-fadeIn ">
          {['Alcance', 'Visión', 'Nosotros', 'Servicios'].map((item, index) => (
        <a
          key={item}
          href={`#${item.toLowerCase().replace(' ', '-')}`}
          style={{ 
            
            animationDelay: `${index * 0.3}s` 
          }}
        className="animate-reveal px-5 py-3 rounded-full text-ypora-dark hover:bg-ypora-green font-bold text-xl bg-white text-center shadow-sm active:scale-95 transition-transform"
      >
        {item}
      </a>
    ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;