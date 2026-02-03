import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// 1. Configuramos el icono de la gotita para los pines del mapa
const iconGota = new L.Icon({
    iconUrl: '/IconGotitas.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35],
});

const Alcance = () => {
  // Datos para las Cards
  const zonasCards = [
    { 
      nombre: "Zona Centro", 
      desc: "Atención rápida en el casco histórico y microcentro de la ciudad.",
      color: "bg-blue-50"
    },
    { 
      nombre: "Barrios", 
      desc: "Llegamos a Laguna Seca, 17 de Agosto, Molina Punta y zonas aledañas.",
      color: "bg-green-50"
    },
    { 
      nombre: "Empresas", 
      desc: "Abastecimiento programado para oficinas, clínicas y entes públicos.",
      color: "bg-red-50"
    }
  ];

  // Puntos para los pines del mapa en Corrientes Capital
  const puntosMapa = [
    { id: 1, pos: [-27.4692, -58.8306], nombre: "Zona Centro" },
    { id: 2, pos: [-27.4858, -58.8011], nombre: "Barrios Sur/Este" },
    { id: 3, pos: [-27.4520, -58.7950], nombre: "Zona Norte" }
  ];

  return (
    <section id="alcance" className="py-20 bg-white font-montserrat">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título de Sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-ypora-dark tracking-tighter">
            NUESTRO <span className="text-ypora-green">ALCANCE</span>
          </h2>
          <div className="h-1.5 w-24 bg-ypora-red mx-auto mt-4 rounded-full"></div>
        </div>

        {/* ESTRUCTURA 1: LAS 3 CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {zonasCards.map((zona, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl border-2 border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white group"
            >
              <div className={`${zona.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                <img src="/IconGotitas.png" alt="Gota YPora" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-2xl font-black text-ypora-dark mb-3">{zona.nombre}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{zona.desc}</p>
            </div>
          ))}
        </div>

        {/* ESTRUCTURA 2: EL MAPA */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-ypora-green to-blue-400 rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white h-[450px] z-10">
            <MapContainer 
              center={[-27.4692, -58.8306]} 
              zoom={13} 
              scrollWheelZoom={false} 
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; OpenStreetMap'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {puntosMapa.map(punto => (
                <Marker key={punto.id} position={punto.pos} icon={iconGota}>
                  <Popup>
                    <div className="font-montserrat text-center">
                      <p className="font-bold text-ypora-dark">{punto.nombre}</p>
                      <p className="text-sm text-ypora-green font-bold">Distribución YPora 💧</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <p className="text-center mt-10 text-gray-400 font-bold italic text-sm md:text-base">
          * Si tu barrio no figura, consultanos. ¡Ampliamos nuestra zona constantemente!
        </p>

      </div>
    </section>
  );
};

export default Alcance;