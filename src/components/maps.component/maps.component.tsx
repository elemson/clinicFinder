import React from "react";
import logo from "./logo.svg";
import { GoogleMap } from "@react-google-maps/api";

import { styles, center2, option } from "../../interfaces/interfaces";
import mapStyles from "./maps.styles";

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
  return (
    <div className="Search">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={(event) => {
          console.log(event);
        }}
      />
    </div>
  );
};

export default Map;
