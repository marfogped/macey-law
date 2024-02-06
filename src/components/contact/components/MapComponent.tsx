import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  position: [number, number];
}

const MapComponent: React.FC<MapProps> = ({ position }) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = L.map('map', {
        center: position,
        zoom: 13
      });
    
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapRef.current);

      L.marker(position).addTo(mapRef.current);
    } else {
      mapRef.current.setView(position, 15);
      L.marker(position).addTo(mapRef.current);
    }
  }, [position]);

  return <div id="map" style={{ height: '500px', width: '100%', zIndex: "5" }}></div>;
};

export default MapComponent;
