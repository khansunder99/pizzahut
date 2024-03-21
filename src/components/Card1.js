import React from 'react';

export default function Card1({ cardImage, name, description, price }) {
  return (
    <div className="text-black w-[400px] h-[300px] bg-white flex justify-center items-center flex-col border border-1 rounded-lg group overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:shadow-lg w-full">
      <div
        style={{ backgroundImage: `url(${cardImage})` }}
        className="w-full h-[60%] bg-contain bg-center group-hover:bg-cover bg-no-repeat"
      ></div>
      <div className="w-full h-[50%] flex justify-center items-start flex-col p-2 gap-1">
        <p className="text-md flex font-semibold">{name}</p>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="h-[1px] w-full bg-gray-300 my-1"></div>
        <button className="w-30 h-12 bg-green-600 rounded text-white text-sm inline p-4 flex justify-between items-center gap-4 w-full">
          <p className="text-md">Багц сонгох</p> <p className="text-md">MNT {price}</p>
        </button>
      </div>
    </div>
  );
}
