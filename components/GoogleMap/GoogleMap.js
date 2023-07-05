import React, { useCallback, useRef } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

//import mapStyles from "./mapUtils/mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100%",
  width: "100%",
};

const options = {
  //  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function GoogleMapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey,
    //googleMapsApiKey: "",
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={14} 
      center={{
        lat: 13.011590,
        lng: 77.555010,
      }} 
      options={options}
      onLoad={onMapLoad}
    ></GoogleMap>
  );
}
