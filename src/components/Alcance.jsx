import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const iconGota = new L.Icon({
    iconUrl: '/IconGotitas.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35],
});

const Alcance = () => {
  const puntosMapa = [
    { id: 1, pos: [-27.4692, -58.8306], nombre: "Zona Centro" },
    { id: 2, pos: [-27.4520, -58.7880], nombre: "Barrio Víctor Colas" },
    { id: 3, pos: [-27.4800, -58.8350], nombre: "Zona Vidal" }
  ];

  const zonasCards = [
    { nombre: "Zona Centro", desc: "Atención rápida en el casco histórico y microcentro.", color: "bg-blue-50" },
    { nombre: "Barrios", desc: "Cobertura en sectores residenciales con acceso garantizado.", color: "bg-green-50" },
    { nombre: "Empresas", desc: "Abastecimiento programado para oficinas y comercios.", color: "bg-red-50" }
  ];

  const zonaSegura = [
    [-27.4855, -58.8500], 
    [-27.4810, -58.8000], 
    [-27.4700, -58.7800], 
    [-27.4480, -58.7820], 
    [-27.4520, -58.8000], 
    [-27.4580, -58.8280], 
    [-27.4650, -58.8450], 
  ];

  const estiloRango = {
    fillColor: '#E31E24', 
    fillOpacity: 0.15,
    color: '#E31E24',
    weight: 3,
    dashArray: '10, 10'
  };

  return (
    <section id="alcance" className="py-20 bg-white font-montserrat">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título de la Sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-ypora-dark tracking-tighter">
            NUESTRO <span className="text-ypora-green">ALCANCE</span>
          </h2>
          <div className="h-1.5 w-24 bg-ypora-red mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 1. SECCIÓN DE CARDS INFORMATIVAS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {zonasCards.map((zona, index) => (
            <div 
              key={index} 
             className="p-8 rounded-3xl border-2 border-gray-100 hover:border-ypora-green/30 hover:shadow-[0_20px_50px_rgba(61,180,162,0.15)] hover:-translate-y-2 transition-all duration-300 bg-white"
            >
              <div className={`${zona.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                <img src="/IconGotitas.png" alt="Gota" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-2xl font-black text-ypora-dark mb-3">{zona.nombre}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{zona.desc}</p>
            </div>
          ))}
        </div>

        {/* 2. SECCIÓN DEL MAPA */}
        <div className="relative group">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white h-[500px] z-10">
            <MapContainer 
              center={[-27.4692, -58.8200]} 
              zoom={13} 
              scrollWheelZoom={false} 
              className="h-full w-full"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Polygon pathOptions={estiloRango} positions={zonaSegura}>
                <Popup>
                  <div className="font-montserrat text-center">
                    <p className="font-bold text-ypora-red">Área de Cobertura YPora</p>
                  </div>
                </Popup>
              </Polygon>
              
              {puntosMapa.map(punto => (
                <Marker key={punto.id} position={punto.pos} icon={iconGota}>
                  <Popup>
                    <div className="font-montserrat text-center">
                      <p className="font-bold text-ypora-dark">{punto.nombre}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <p className="text-center mt-10 text-gray-700 font-bold italic text-sm md:text-base px-4">
            ¡Zona de cobertura limitada! Puede <a href="https://wa.me/3794757524" className="text-ypora-green underline">CONSULTAR SOBRE SU ZONA</a>.
        </p>
      </div>
    </section>
  );
};

export default Alcance;