import React from 'react';

import bidon20LImg from '../assets/images/IconYPORA1.jpeg'; 
import dispenserImg from '../assets/images/dispenserFrio-calor.jpg'; 
import revendedorImg from '/IconGotitas.png'; 

const Servicios = () => {
  const listaServicios = [
    {
      id: 1,
      titulo: "Bidón de 20L Retornable",
      desc: "La opción más económica para hogares y empresas. Máximo rendimiento y pureza garantizada.",
      imagen: bidon20LImg, 
      etiqueta: "Más vendido"
    },
    {
      id: 2,
      titulo: "Dispenser Frío/Calor",
      desc: "Agua a la temperatura ideal al instante. Diseño moderno y funcional para tu cocina u oficina.",
      imagen: dispenserImg,
      etiqueta: "Comodidad Total"
    },
    {
      id: 3,
      titulo: "Sé Revendedor YPorá",
      desc: "Sumate a nuestra red y generá ingresos extras distribuyendo calidad. ¡Consultanos!",
      imagen: revendedorImg, 
      etiqueta: "Oportunidad"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-ypora-dark tracking-tighter">
            SERVICIOS <span className="text-ypora-green">YPORÁ</span>
          </h2>
          <div className="h-1.5 w-24 bg-ypora-red mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-600 font-medium text-lg max-w-xl mx-auto">
            Productos pensados para tu bienestar y el de tu familia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 align-items-stretch">
          {listaServicios.map((servicio) => (
            <div 
              key={servicio.id}
              className="relative flex flex-col p-6 rounded-[35px] border border-gray-100 bg-white transition-all duration-300 
                         hover:border-ypora-green/50 hover:shadow-[0_30px_60px_-15px_rgba(61,180,162,0.25)] hover:-translate-y-2 group h-full"
            >
              <span className="absolute top-6 right-6 bg-ypora-green text-white text-xs font-bold px-4 py-1.5 rounded-full z-10 shadow-sm">
                {servicio.etiqueta}
              </span>

              {/* --- NUEVO CONTENEDOR DE IMAGEN GRANDE --- */}
              <div className="w-full h-72 bg-gray-50 rounded-[25px] flex items-center justify-center mb-8 overflow-hidden p-4 group-hover:bg-blue-50/50 transition-colors">
                <img 
                    src={servicio.imagen} 
                    alt={servicio.titulo} 
                   
                    className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-ypora-dark mb-4 leading-tight">
                    {servicio.titulo}
                </h3>
                
                <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                    {servicio.desc}
                </p>

                <a 
                    href="https://wa.me/3794757524"
                    target="_blank"
                    className="w-full py-4 bg-ypora-green text-white text-center rounded-2xl font-bold text-lg hover:bg-ypora-dark transition-colors shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                    Consultar Precio 💧
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Servicios;