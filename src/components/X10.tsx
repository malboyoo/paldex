import React from "react";

export default function X10({ id, setX10State, x10State }: { id: number; setX10State: React.Dispatch<React.SetStateAction<number[]>>; x10State?: number[] }) {
  function addToX10(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setX10State((prevState) => [...prevState, id]);
    } else {
      setX10State((prevState) => prevState.filter((x) => x !== id));
    }
  }
  return (
    <div className="absolute top-1 left-1 z-10">
      <input
        type="checkbox"
        className="border-2 border-slate-800 rounded-2xl text-blue-600 px-2"
        onChange={addToX10}
        checked={x10State?.includes(id) ? true : false}
      />
      <span>x10</span>
    </div>
  );
}
