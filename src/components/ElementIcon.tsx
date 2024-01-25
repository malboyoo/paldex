import React from "react";
import Image from "next/image";

export default function ElementIcon({ types, id }: { types: string[]; id?: number }) {
  return (
    <div className="flex">
      {types.map((type: string) => (
        <Image src={`/images/type/${type}.webp`} alt={`${type} icon`} width={25} height={25} key={`${type}-${id}`} />
      ))}
    </div>
  );
}
