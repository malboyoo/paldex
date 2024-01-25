"use client";
import { palList } from "../data/pals";
import { PalI, SuitabilityI } from "../inteface/pals";
import PalCard from "@/components/PalCard";
import React from "react";

export default function Home() {
  const [elementFilter, setElementFilter] = React.useState<string>("");
  const [suitabilityFilter, setSuitabilityFilter] = React.useState<string>("");
  const [search, setSearch] = React.useState<string>("");

  return (
    <>
      <div className="flex gap-4 py-5 justify-center">
        <input
          className="border-2 border-slate-800 rounded-2xl text-blue-600 px-2"
          placeholder="search by name, id, or key"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <div className="flex gap-2">
          <span>filter by element</span>
          <select className="border-2 border-slate-500 rounded-2xl text-blue-600" onChange={(e) => setElementFilter(e.target.value)}>
            <option value="">all</option>
            <option value="neutral">neutral</option>
            <option value="dark">dark</option>
            <option value="dragon">dragon</option>
            <option value="electric">electric</option>
            <option value="fire">fire</option>
            <option value="grass">grass</option>
            <option value="ice">ice</option>
            <option value="ground">ground</option>
            <option value="water">water</option>
          </select>
        </div>
        <div className="flex gap-2">
          <span>filter by suitability</span>
          <select className="border-2 border-slate-500 rounded-2xl text-blue-600" onChange={(e) => setSuitabilityFilter(e.target.value)}>
            <option value="">all</option>
            <option value="handiwork">handiwork</option>
            <option value="transporting">transporting</option>
            <option value="farming">farming</option>
            <option value="gathering">gathering</option>
            <option value="mining">mining</option>
            <option value="planting">planting</option>
            <option value="lumbering">lumbering</option>
            <option value="Medicine Production">Medicine Production</option>
            <option value="kindling">kindling</option>
            <option value="Generating Electricity">Generating Electricity</option>
            <option value="watering">watering</option>
            <option value="cooling">cooling</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap min-h-screen items-center justify-start p-24 gap-4">
        {palList
          .filter((pal: PalI) => pal.types.includes(elementFilter) || elementFilter === "")
          .filter((pal: PalI) => pal.suitability.find((s: SuitabilityI) => s.type === suitabilityFilter) || suitabilityFilter === "")
          .filter((pal: PalI) => pal.name.toLowerCase().includes(search) || pal.id === parseInt(search) || pal.key === parseInt(search) || search === "")
          .map((pal: PalI) => (
            <PalCard pal={pal} key={pal.key} />
          ))}
      </div>
    </>
  );
}
