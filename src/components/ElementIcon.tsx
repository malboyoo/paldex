import React from "react";
import Image from "next/image";

export default function ElementIcon({ types }: { types: string[] }) {
  const elementImages: any = {
    neutral: "/images/type/neutral_icon.webp",
    dark: "/images/type/dark_icon.webp",
    dragon: "/images/type/dragon_icon.webp",
    electric: "/images/type/electric_icon.webp",
    fire: "/images/type/fire_icon.webp",
    grass: "/images/type/grass_icon.webp",
    ice: "/images/type/ice_icon.webp",
    ground: "/images/type/ground_icon.webp",
    water: "/images/type/water_icon.webp",
  };
  return (
    <div className="flex">
      {types.map((type: string) => (
        <Image src={elementImages[type]} alt={`${type} icon`} width={25} height={25} />
      ))}
    </div>
  );
}
