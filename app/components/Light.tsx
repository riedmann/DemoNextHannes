"use client";
import React, { useEffect, useState } from "react";

interface Props {
  filter: string;
}

export default function Light({ filter = "" }: Props) {
  const [people, setPeople] = useState<any[]>([]);
  const [filteredPeople, setFilteredPeople] = useState<any[]>([]);

  useEffect(() => {
    console.log("inside");

    fetch("https://5e391b0baad2220014962337.mockapi.io/swp/person").then(
      (response) =>
        response.json().then((data) => {
          setPeople(data);
          setFilteredPeople(data);
        })
    );
  }, []);

  useEffect(() => {
    let result = people.filter((person: any) => person.name.includes(filter));
    setFilteredPeople(result);
  }, [filter]);

  if (people.length == 0) {
    return <div>Loading</div>;
  }

  return (
    <div className="border p-4 text-xs">
      {filteredPeople.map((person) => (
        <div>{person.name}</div>
      ))}
    </div>
  );
}
