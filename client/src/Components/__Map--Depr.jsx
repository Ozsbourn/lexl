// import React      from 'react'
// import { MapContainer,
//          TileLayer,
//          Marker,
//          Popup,
//          useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L          from 'leaflet';
// import MarkerIcon from '../Assets/img/marker.png'; 

// const Map = ({coords, displayName}) => {
//     const { latitude, longtitude } = coords;
//     const icon = new L.Icon({
//         iconUrl:    MarkerIcon,
//         iconSize:   [25, 35],
//         iconAnchor: [5, 30]
//     });

//     function MapView() {
//         let map = useMap();
//         map.setView([latitude, longtitude], map.getZoom());
//         return null;
//     }


//   return (
//     <div className='mapcontainer'>
//         <MapContainer className='map' center={[latitude, longtitude]} zoom={10} scroolWheelZoom={true}>
//             <TileLayer
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//             />
//             <Marker icon={icon} position={[latitude, longtitude]}>
//                 <Popup>{displayName}</Popup>
//             </Marker>
//             <MapView />
//         </MapContainer>
//     </div>
//   )
// }

// export default Map