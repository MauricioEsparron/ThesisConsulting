import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../../css/Mapa.css";

// Configuración de iconos personalizada
const createCustomIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;

  return L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

interface MapProps {
  initialPosition?: [number, number];
  zoomLevel?: number;
  scrollWheelZoom?: boolean;
  markerText?: string;
}

const Mapa: React.FC<MapProps> = ({
  initialPosition = [-12.092046, -77.036118], // Surquillo, Lima
  zoomLevel = 17,
  scrollWheelZoom = false,
  markerText = "Av. República de Panamá 4460, Surquillo - Lima",
}) => {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    createCustomIcon();
    setMapReady(true);
  }, []);

  if (typeof window === "undefined" || !mapReady) {
    return <div className="map-loading">Cargando mapa...</div>;
  }

  return (
    <div className="map-container">
      <MapContainer
        center={initialPosition}
        zoom={zoomLevel}
        scrollWheelZoom={scrollWheelZoom}
        className="leaflet-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={initialPosition}>
          <Popup>
            <div className="custom-popup">
              <h3>Nuestra Ubicación</h3>
              <p>{markerText}</p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${initialPosition[0]},${initialPosition[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="directions-link"
              >
                Cómo llegar
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapa;
