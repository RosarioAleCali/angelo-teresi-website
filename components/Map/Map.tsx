"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import openMaps from "@/utils/openMaps";

// Fix for missing marker icon in Leaflet
//@ts-expect-error Property _getIconUrl may not exist in L.Icon.Default.prototype
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Map = () => {
  const position: L.LatLngExpression = [38.0931709, 13.3608928];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full min-h-96">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <button onClick={openMaps} className='underline'>
            Direzioni
          </button>
        </Popup>
      </Marker>
    </MapContainer>
 );
};

export default Map;
