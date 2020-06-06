import React from "react";
import Map from "./components/maps.component/Maps.component";
import Search from "./components/search.component/Search.component";

import { useLoadScript } from "@react-google-maps/api";

export default function App() {
  const libraries = ["places"];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return <>"Error loading maps"</>;
  if (!isLoaded) return <>"Loading Maps"</>;
  return (
    <>
      <Search />
      <Map />
    </>
  );
}
