"use client";
import React, { useState } from "react";
import Light from "./Light";

type Props = {};

export default function LightContainer({}: Props) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input value={search} onChange={(el) => setSearch(el.target.value)} />

      <Light filter={search} />
    </div>
  );
}
