import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

function test(): JSX.Element {
  const sum = (a: number, b: number): number => a + b;
  return <div>Hello!{sum(15, 15)};</div>;
}

export default test;
