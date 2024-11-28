import React from "react";
import Card from "../components/Card";
import Light from "../components/Light";
import LightContainer from "../components/LightContainer";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <h1>People</h1>
      <LightContainer />
    </div>
  );
}
