import React, { useState, 
                useEffect } from 'react'
import { MapContainer, 
         Marker, 
         TileLayer, 
         useMapEvents,
         Popup }     from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Test() {
  //const [marks, setMarks] = useState([]);
  const [markerDesc, setMarkerDesc] = useState("");
  const [initialPosition,  setInitialPosition]  = useState([0,0]);
  const [selectedPosition, setSelectedPosition] = useState([0,0]);

   useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      setInitialPosition([latitude, longitude]);
    }, err => console.log(err));
  }, []);


  const Markers = () => {
    const map = useMapEvents({
        click(e) {                                
            setSelectedPosition([
                e.latlng.lat,
                e.latlng.lng
            ]);                
        },            
    })

    return (
        selectedPosition ? 
            <Marker           
              key={selectedPosition[0]}
              position={selectedPosition}
              interactive={true} 
            >
              <Popup style={{height: '300px'}}>
                <div style={{'overflowY': "auto"}}>
                  <textarea  
                    placeholder="Введите описание здесь" 
                    maxLength={100} 
                    
                    className="markdescription"
                    id="texthandler"
                  />
                </div>
              </Popup>
            </Marker>
        : null
    )   
  }


  return(
    <MapContainer 
        center={selectedPosition || initialPosition} 
        zoom={12}  
        style={
          {height: "400px", width: "100%"}
        }
        doubleClickZoom={false}
        className='mapcontainer'                    
    >
        {/* <button className='leaflet-top leaflet-right map-adder' onClick={AddMarker}>+</button> */}

        <Markers />
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />                        
    </MapContainer>
)
}

export default Test



// import React, { useState }      from 'react'
// import { MapContainer,
//          TileLayer,
//          Marker,
//          Popup,
//          useMap, 
//          useMapEvents} from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L          from 'leaflet';
// import MarkerIcon from '../Assets/img/marker.png';

// function Test() {
//   const [marks, setMarks] = useState([]);
  
  

//   const AddMarker = (e) => {
//     //marks.push([e.lat, e.lon]);
//     console.log("click");
//     useMapEvents({
//       click(e) {
//         console.log(e.latlng.lat);
//         console.log(e.latlng.lng);
//       }
//     }); 
//   };

//   return (
//         <MapContainer  
//           center={[51.505, -0.09]} 
//           zoom={13} 
//           scrollWheelZoom={true} 
//           className='testcontainer'
//           onClick={AddMarker}>
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           {marks.map((position, idx) => 
//             <Marker key={`marker-${idx}`} position={position}>
//               <Popup>
//                 <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
//               </Popup>
//             </Marker>
//           )}
//           {/* {mark} */}
//           {/* <Marker position={[51.505, -0.09]}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//           </Marker> */}

//         </MapContainer>
//   )
// }

// export default Test