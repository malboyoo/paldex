import { PalI } from "@/inteface/pals";
import Image from "next/image";
import React, { use, useEffect } from "react";
import ElementIcon from "./ElementIcon";
import SuitabilityIconAndLvl from "./SuitabilityIconAndLvl";
import Link from "next/link";
import X10 from "./X10";

export default function PalCard({
  pal,
  setX10State,
  x10State,
}: {
  pal: PalI;
  setX10State: React.Dispatch<React.SetStateAction<number[]>>;
  x10State?: number[];
}) {
  const [isClientReady, setIsClientReady] = React.useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClientReady(true);
    }
  }, []);

  const elementBg: any = {
    fire: "bg-red-600",
    water: "bg-blue-600",
    electric: "bg-yellow-500",
    grass: "bg-green-500",
    ice: "bg-blue-300",
    ground: "bg-amber-900",
    dark: "bg-slate-900",
    dragon: "bg-violet-800",
    neutral: "bg-gray-600",
  };

  return (
    <div className={`border-2 border-slate-800 rounded-2xl flex w-96 h-[220px] relative overflow-hidden ${elementBg[pal.types[0]]} bg-opacity-40 bg-b`}>
      <Image src={pal.image} alt={pal.name} width={200} height={200} />
      <div className="p-2 flex flex-col items-end w-full gap-2">
        <span># {pal.key}</span>
        <Link href={pal.wiki}>
          <span className="text-2xl font-bold text-blue-400">{pal.name}</span>
        </Link>
        <ElementIcon types={pal.types} id={pal.id} />
        <SuitabilityIconAndLvl suitability={pal.suitability} id={pal.id} />
        <div>
          {pal.drops.map((drop: string) => (
            <span className="text-[10px]" key={`${drop}-${pal.id}`}>
              <span className="text-yellow-300">[</span>
              {drop}
              <span className="text-yellow-300">]</span>
            </span>
          ))}
        </div>
        {isClientReady ? <X10 id={pal.id} setX10State={setX10State} x10State={x10State} /> : null}
      </div>
    </div>
  );
}
