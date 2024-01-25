import { SuitabilityI } from "@/inteface/pals";
import React from "react";
import Image from "next/image";

export default function SuitabilityIconAndLvl({ suitability, id }: { suitability: SuitabilityI[]; id: number }) {
  const elementImages: any = {
    handiwork: "/images/suitability/Handiwork_Icon.webp",
    transporting: "/images/suitability/Transporting_Icon.webp",
    farming: "/images/suitability/Farming_Icon.webp",
    gathering: "/images/suitability/Gathering_Icon.webp",
    mining: "/images/suitability/Mining_Icon.webp",
    planting: "/images/suitability/Planting_Icon.webp",
    lumbering: "/images/suitability/Lumbering_Icon.webp",
    "Medicine Production": "/images/suitability/Medicine_Production_Icon.webp",
    kindling: "/images/suitability/Kindling_Icon.webp",
    "Generating Electricity": "/images/suitability/Generating_Electricity_Icon.webp",
    watering: "/images/suitability/Watering_Icon.webp",
    cooling: "/images/suitability/Cooling_Icon.webp",
  };
  return (
    <div className="flex">
      {suitability.map((s: SuitabilityI) => (
        <div className="relative w-[25px] h-[25px]" key={`${s.type}-${id}`}>
          <Image src={elementImages[s.type]} alt={`${s.type} icon`} width={25} height={25} />
          <span className="absolute -bottom-1 right-0 text-xs">{s.level}</span>
        </div>
      ))}
    </div>
  );
}
