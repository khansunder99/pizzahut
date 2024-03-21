import React from "react";

export default function Card4({ cardImage, name, description, price }) {
  return (
    <div className="text-black w-[240px] h-[260px] bg-white flex justify-center items-center flex-col border border-1 rounded-lg group overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:shadow-lg w-full">
      <div
        style={{ backgroundImage: `url(${cardImage})` }}
        className="w-full h-[60%] bg-no-repeat bg-contain bg-center group-hover:bg-cover"
      ></div>
      <div className="w-full h-[50%] flex justify-center items-start flex-col p-2 gap-2">
        <p className="text-md flex font-semibold">{name}</p>
        <p className="text-gray-500 text-sm">{description}</p>
        <button className="w-30 h-12 bg-green-600 rounded text-white text-sm inline p-4 flex justify-between items-center gap-4 w-full">
          <p className="text-md"> Сагсанд хийх</p> <p className="text-md">MNT {price}</p>
        </button>
      </div>

    </div>
  );
}
