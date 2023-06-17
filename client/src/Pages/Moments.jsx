import React, { useState, useEffect } from 'react'
import axios from 'axios';
//import Map   from './../Components/Map'

const Moments = () => {
  // const [coords, setCoords]    = useState({
  //   latitude: '',
  //   longtitude: ''
  // });
  // const [displayName, setName] = useState("");
  // const [address, setAddress]  = useState({});

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     getCurentCityName,
  //     error, 
  //     options
  //   )
  // }, [])

  // function error(err) {
  //   if (
  //     err.code === 1 || // user denied accessing the location
  //     err.code === 2 || // any internal errors
  //     err.code === 3    // error due to timeout
  //   ) {
  //     alert(err.message);
  //   } else {
  //     alert(err);
  //   }
  // }

  // const options = {
  //   enableHighAccuracy: true,
  //   maximumAge: 30000,
  //   timeout: 27000
  // }

  // function getCurentCityName(position) {
  //   setCoords({
  //     latitude:   position.coords.latitude,
  //     longtitude: position.coords.longtitude
  //   });
  // }

  // //let url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2' + '&lat=' + coords.latitude 
  // let url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2' + '&lat=' + 56.8543669 
  //     + '&lon=' + 60.6532434;
  // //    + '&lon=' + coords.longtitude;

  // axios.get(url, {
  //   mode: 'cors',
  //   headers: {
  //     'Access-Control-Allow-Origin': 'https://o2cj2q.csb.app'
  //   }
  // })
  // .then((response) => response.toJSON())
  // //.then((response) => response.json())
  // .then((data) => setName(data.displayName));

  // function update(field) {
  //   return (e) => {
  //     const value = e.currentTarget.value;
  //     setAddress((address) => ({ ...address, [field]: value }));
  //   }
  // }

  // function getData() {
  //   axios.post(url, {
  //       mode: 'cors',
  //       headers: {
  //         'Access-Control-Allow-Origin': 'https://o2cj2q.csb.app'
  //       }
  //     }
  //   )
  //   .then((response) => {
  //     if (response.ok) {
  //       return response.toJSON();
  //       //return response.json();
  //     }
  //   })
  //   .then((data) => {
  //     setName(data[0].displayName);
  //     setCoords({
  //       latitude:   data[0].lat,
  //       longtitude: data[0].lon
  //     });
  //   })
  //   .catch(() => error('Проверьте введённые данные!'));
  // }

  // function submitHandler(e) {
  //   e.preventDefault();

  //   //
  // }





  return (
    <div>Moments</div>
    // <div className='maphandler'>
    //   <Map coords={coords} displayName={displayName} />
    // </div>
  )
}

export default Moments