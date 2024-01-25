import { SuitabilityI } from "@/inteface/pals";
import React from "react";
import Image from "next/image";

export default function SuitabilityIconAndLvl({ suitability, id }: { suitability: SuitabilityI[]; id: number }) {
  return (
    <div className="flex">
      {suitability.map((s: SuitabilityI) => (
        <div className="relative w-[25px] h-[25px]" key={`${s.type}-${id}`}>
          <Image src={`/images/suitability/${s.type}.webp`} alt={`${s.type} icon`} width={25} height={25} />
          <span className="absolute -bottom-1 right-0 text-xs">{s.level}</span>
        </div>
      ))}
    </div>
  );
}
