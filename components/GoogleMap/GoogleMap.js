import React, { useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  useJsApiLoader,
} from "@react-google-maps/api";

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

export default function GoogleMapComponent({ lat, lng }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey,
    //  googleMapsApiKey: "",
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
      zoom={7}
      defaultCenter={{ lat: 13.012295606815071, lng: 77.55631622870938 }}
      center={{
        lat: 13.01159,
        lng: 77.55501,
      }}
      options={options}
      onLoad={onMapLoad}
    >
      <Marker
        position={{ lat: 13.012295606815071, lng: 77.55631622870938 }}
        // icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
      />
    </GoogleMap>
  );
}
