import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function Map({ Lat, Lng }) {
    return (
        <MapContainer center={[Lat, Lng]} zoom={18} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[Lat, Lng]}>
                <Popup>
                    Cămin T18 &amp; Cămin T19 - Parter <br/> Bulevardul Tudor Vladimirescu, Iași 700050.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;
