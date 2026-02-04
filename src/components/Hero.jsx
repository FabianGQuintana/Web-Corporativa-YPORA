import React from 'react';
import heroDesktop from '../assets/images/Hero1.jpeg';
import heroMobile from '../assets/images/HeroMobile.jpeg'; 

const Hero = () => {
  // Detectamos el ancho para la imagen de fondo
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden group bg-slate-900">
      {/* IMAGEN DE FONDO CAMBIANTE */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${isMobile ? heroMobile : heroDesktop})` }}
      >
        {/* Overlay: En móvil siempre visible (60%), en PC aparece al pasar el mouse */}
        <div className="absolute inset-0 bg-black/60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000"></div>
      </div>

      {/* CONTENIDO (Mensaje y Botón) */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        
        {/* MENSAJE: Efecto Slow en PC / Siempre visible en Móvil */}
        <div className="md:opacity-0 md:group-hover:opacity-100 md:translate-y-10 md:group-hover:translate-y-0 transition-all duration-1000 ease-in-out">
          <h1 className="text-3xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl">
            La pureza de nuestra agua en <span className="text-ypora-green">tu hogar</span>
          </h1>
          
          <p className="mt-4 text-base md:text-2xl text-white/90 font-medium drop-shadow-md">
            Llevamos agua mineralizada de máxima calidad a cada rincón de Corrientes.
          </p>
        </div>

        {/* BOTÓN */}
        <div className="mt-8 md:mt-60 mb-1">
          <a 
            href="https://wa.me/3794757524" 
            target="_blank" 
            className="inline-block bg-ypora-red text-white px-8 py-4 md:px-12 md:py-5 rounded-full font-black text-lg md:text-2xl shadow-2xl hover:scale-110 transition-all active:scale-95"
          >
            PEDIR AHORA 💧
          </a>
        </div>
      </div>

        {/* EFECTO DE OLA (SVG) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px] fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>


    </section>
  );
};

export default Hero;