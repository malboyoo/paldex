"use client";
import { palList, elementList, suitabilityList } from "../data/pals";
import { PalI, SuitabilityI } from "../inteface/pals";
import { Input, Select, Tooltip } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import PalCard from "@/components/PalCard";
import React, { use, useEffect } from "react";
import ElementIcon from "@/components/ElementIcon";
import Image from "next/image";

export default function Home() {
  const lootList = palList
    .map((pal: PalI) => pal.drops)
    .flat()
    .filter((drop: string, index: number, self: string[]) => self.indexOf(drop) === index)
    .map((drop: string) => ({ label: drop, value: drop }));
  const [elementFilter, setElementFilter] = React.useState<string>("");
  const [suitabilityFilter, setSuitabilityFilter] = React.useState<string>("");
  const [search, setSearch] = React.useState<string>("");
  const [x10State, setX10State] = React.useState<any>(typeof window !== "undefined" ? JSON.parse(localStorage.getItem("x10") as string) : []);
  const [x10Filter, setX10Filter] = React.useState<string>("");
  const [lootFilter, setLootFilter] = React.useState<string>("");

  const elementOptions = elementList.map((element: string) => ({
    label: (
      <span className="flex gap-1">
        <ElementIcon types={[element]} key={`element-key-${element}`} /> {element.charAt(0).toUpperCase() + element.slice(1)}
      </span>
    ),
    value: element,
  }));

  const suitabilityOptions = suitabilityList.map((suitability: string) => ({
    label: (
      <span className="flex gap-1">
        <Image src={`/images/suitability/${suitability}.webp`} alt={`${suitability} icon`} width={25} height={25} />
        {suitability.charAt(0).toUpperCase() + suitability.slice(1)}
      </span>
    ),
    value: suitability,
  }));

  useEffect(() => {
    localStorage.setItem("x10", x10State?.length ? JSON.stringify(x10State) : JSON.stringify([]));
  }, [x10State]);

  return (
    <>
      <div className="flex flex-wrap gap-10 px-10 py-5 justify-center">
        <div>
          <Input
            className="text-blue-600 px-2"
            placeholder="search by name or number"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            style={{ width: 250 }}
          />
        </div>
        <div className="flex gap-1 items-center">
          <span>Element</span>
          <Select
            style={{ width: 150 }}
            onChange={(e) => (e ? setElementFilter(e) : setElementFilter(""))}
            allowClear
            options={elementOptions}
            placeholder="all"
          />
        </div>
        <div className="flex gap-1 items-center">
          <span>Tasks</span>
          <Select style={{ width: 200 }} onChange={(e) => setSuitabilityFilter(e)} allowClear options={suitabilityOptions} placeholder="all" />
        </div>
        <div className="flex gap-1 items-center">
          <Tooltip title="already Catched ?">
            <Image src={`/images/other/palsphere.webp`} alt={`Palsphere icon`} width={25} height={25} />
          </Tooltip>
          <Select
            onChange={(e) => setX10Filter(e)}
            style={{ width: 125 }}
            allowClear
            placeholder="Catched ?"
            options={[
              { label: "yes", value: "x10" },
              { label: "no", value: "notx10" },
            ]}
          />
        </div>
        <div className="flex gap-1 items-center">
          <span>Loot</span>
          <Select
            allowClear
            showSearch
            className="text-blue-600 px-2"
            placeholder="search by loot"
            onChange={(e) => setLootFilter(e)}
            style={{ width: 200 }}
            options={lootList}
          />
        </div>
      </div>
      <div className="flex flex-wrap p-10 gap-4 justify-center">
        {palList
          .filter((pal: PalI) => pal?.types?.includes(elementFilter) || elementFilter === "" || suitabilityFilter === undefined)
          .filter(
            (pal: PalI) =>
              pal?.suitability?.find((s: SuitabilityI) => s.type === suitabilityFilter) || suitabilityFilter === "" || suitabilityFilter === undefined
          )
          .filter((pal: PalI) => pal?.name?.toLowerCase().includes(search) || pal?.id === parseInt(search) || pal?.key == search || search === "")
          .filter(
            (pal: PalI) =>
              x10Filter === undefined ||
              x10Filter === "" ||
              (x10Filter === "x10" && x10State?.includes(pal.id)) ||
              (x10Filter === "notx10" && !x10State?.includes(pal.id))
          )
          .filter((pal: PalI) => pal?.drops?.includes(lootFilter) || lootFilter === "" || lootFilter === undefined)
          .map((pal: PalI) => (
            <PalCard pal={pal} key={pal.key} setX10State={setX10State} x10State={x10State} />
          ))}
      </div>
    </>
  );
}
