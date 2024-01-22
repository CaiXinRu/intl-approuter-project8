"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import MarkerIcon from "@node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "@node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

export default function map() {
  return (
    <div>
      <MapContainer
        style={{ height: "80vh", width: "100vw" }}
        center={[24.1591423, 120.6396484]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={
            new L.Icon({
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              shadowUrl: MarkerShadow.src,
              shadowSize: [41, 41],
            })
          }
          position={[24.1591423, 120.6396484]}
        >
          <Popup>
            <div className="text-xs text-rose-950">
              407 台中市西屯區市政路402號7樓
              <br />
              sales@bikonnect.con.tw
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
