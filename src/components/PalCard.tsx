import { PalI } from "@/inteface/pals";
import Image from "next/image";
import React from "react";
import ElementIcon from "./ElementIcon";
import SuitabilityIconAndLvl from "./SuitabilityIconAndLvl";
import Link from "next/link";

export default function PalCard({ pal }: { pal: PalI }) {
  return (
    <div className="border-2 border-slate-800 rounded-2xl flex w-96 h-[220px]">
      <Image src={pal.image} alt={pal.name} width={200} height={200} />
      <div className="p-2 flex flex-col items-end w-full gap-2">
        <span># {pal.key}</span>
        <Link href={pal.wiki}>
          <span className="text-2xl font-bold text-blue-400">{pal.name}</span>
        </Link>
        <ElementIcon types={pal.types} />
        <SuitabilityIconAndLvl suitability={pal.suitability} />
        <div>
          {pal.drops.map((drop: string) => (
            <span className="text-[10px]">[{drop}]</span>
          ))}
        </div>
      </div>
    </div>
  );
}
