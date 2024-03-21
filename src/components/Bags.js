import React from 'react';
 
export default function Bags() {
  return (
    <div className="w-1/4 h-screen flex justify-between items-center flex-col fixed top-0 right-0 border border-1">
      <div className=" flex justify-around items-center flex-col gap-10">
        <div className="w-full flex justify-around items-center mt-4">
          <div className="w-1/3 h-[1px] bg-gray-500"></div>
          <h1 className="inline font-bold">Таны сагс</h1>
          <div className="w-1/3 h-[1px] bg-gray-500"></div>
        </div>
        <img
          src="https://www.pizzahut.mn/assets/Images/empty-basket.svg"
          className="w-[40%]"
        ></img>
        <div className="w-4/5">
          <h1 className="text-xs inline">
            Таны сагс хоосон байна. Бидний онцлох{' '}
            <strong className="text-red-700 underline cursor-pointer">
              {' '}
              багцуудыг харна уу?
            </strong>
          </h1>
        </div>
      </div>
      <div className="w-full h-[7%] flex justify-center items-center border-t-[1px] border-gray-200">
        <div className="w-full h-full flex justify-between items-center px-6">
          <h1 className="text-green-600 flex font-semibold">Купон ашиглах</h1>
          <button className="w-[55%] h-10 bg-green-600 rounded text-white text-sm inline p-4 flex justify-around items-center">
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
}