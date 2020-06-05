import React from "react";
import logo from "./logo.svg";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { styles, center2, option } from "../../interfaces/interfaces";
import mapStyles from "./maps.styles";

const libraries = ["places"];

const mapContainerStyle: styles = {
  width: "100vw",
  height: "100vh",
};

const center: center2 = { lat: 43.653225, lng: -79.38186 };

const options: option = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = (): JSX.Element => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return <>"Error loading maps"</>;
  if (!isLoaded) return <>"Loading Maps"</>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
      />
    </div>
  );
};

export default Map;
