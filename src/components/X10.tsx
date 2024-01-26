import React from "react";
import Image from "next/image";

export default function X10({ id, setX10State, x10State }: { id: number; setX10State: React.Dispatch<React.SetStateAction<number[]>>; x10State?: number[] }) {
  const [toggleCatched, setToggleCatched] = React.useState<boolean>(false);

  React.useEffect(() => {
    x10State?.includes(id) ? setToggleCatched(true) : setToggleCatched(false);
  }, [x10State]);

  function addToX10() {
    if (!toggleCatched) {
      setX10State((prevState) => (prevState ? [...prevState, id] : [id]));
    } else {
      setX10State((prevState) => prevState.filter((x) => x !== id));
    }
  }
  return (
    <div className="absolute top-1 left-1 z-10 flex">
      <div className={`${toggleCatched ? "border-yellow-400 border-2" : "border-2 border-transparent"}  rounded-lg cursor-pointer`} onClick={addToX10}>
        <Image src={`/images/other/palsphere.webp`} alt={`Palsphere icon`} width={25} height={25} />
      </div>
    </div>
  );
}
