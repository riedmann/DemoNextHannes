import React, { useState } from "react";

type Props = {};

export default async function Card({}: Props) {
  const data = await loadData();

  return (
    <div>
      <button>turn on</button>
    </div>
  );
}

const loadData = async () => {};
