import React, { useState, useEffect } from 'react'; 
import nosotrosImg from '../assets/images/Hero1.jpeg';
// Carusel - Asegúrate de que las mayúsculas coincidan con tus archivos
import carouselImg1 from '../assets/images/IconYPORA1.jpeg';
import carouselImg2 from '../assets/images/IconYPORA2.jpeg'; 
import carouselImg3 from '../assets/images/ICONYPORA3.jpeg'; 

const Nosotros = () => {
  const pilares = [
    { 
      titulo: "Nuestra Visión", 
      desc: "Ser la distribuidora líder en Corrientes, reconocida por la pureza de nuestro producto y la excelencia en el servicio al cliente.",
      icon: "/IconGotitas.png" 
    },
    { 
      titulo: "Nuestra Marca", 
      desc: "YPORA (Agua Linda en guaraní) representa la frescura de nuestra tierra y el compromiso con la salud de cada hogar.",
      icon: "/IconGotitas.png" 
    }
  ];

  const carouselImages = [
    { src: carouselImg1, alt: "Imagen corporativa 1" },
    { src: carouselImg2, alt: "Imagen corporativa 2" },
    { src: carouselImg3, alt: "Imagen corporativa 3" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <section id="nosotros" className="py-24 bg-gray-50 font-montserrat overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Bloque Superior: Historia y Marca */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
          <div className="md:w-1/2 relative">
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ypora-green/10 rounded-full blur-3xl"></div>
            <img 
              src={nosotrosImg} 
              alt="Historia YPORA" 
              className="rounded-[40px] shadow-2xl relative z-10 w-full object-cover h-[450px] border-8 border-white"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-ypora-dark tracking-tighter mb-6">
              NUESTRA <span className="text-ypora-green">HISTORIA</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg font-medium leading-relaxed">
              <p>
                **YPORA** nació de una necesidad simple: llevar agua de calidad premium a las familias de Corrientes de una manera cercana y confiable.
              </p>
              <p>
                Nuestra marca rinde homenaje a nuestras raíces. Seleccionamos cuidadosamente cada bidón para asegurar que la pureza sea el estándar en cada entrega.
              </p>
            </div>
          </div>
        </div>

        {/* Bloque Central: Cards de Visión y Marca */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {pilares.map((pilar, index) => (
            <div 
              key={index}
              className="p-10 bg-white rounded-[32px] border-2 border-transparent hover:border-ypora-green/30 hover:shadow-[0_20px_50px_rgba(61,180,162,0.15)] hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <img src={pilar.icon} alt="Icono YPORA" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-3xl font-black text-ypora-dark mb-4">{pilar.titulo}</h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                {pilar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bloque Inferior: Carrusel de Imágenes */}
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-ypora-dark tracking-tighter mb-8">
                NUESTRO MUNDO <span className="text-ypora-green">EN IMÁGENES</span>
            </h2>
        </div>

        {/* CAMBIO REALIZADO: bg-white y object-contain para evitar recortes */}
        <div className="relative w-full max-w-5xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border-8 border-white h-[400px] md:h-[600px] bg-white">
          {carouselImages.map((image, index) => (
              <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
              />
          ))}
          
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-30">
              {carouselImages.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-3 w-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-ypora-green scale-150 shadow-lg' : 'bg-gray-300'
                      }`}
                  ></button>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Nosotros;