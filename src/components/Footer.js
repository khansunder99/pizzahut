import React from "react";

export function Footer() {
  return (
    <div className="w-full bg-black">
      <div className="w-full border-b-[1px] border-white border-opacity-20 justify-center items-center flex py-12 2xl:px-60 xl:px-52 lg:px-44 md:px-36 sm:px-20 px-4">
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 grid-cols-1 w-full gap-12">
          <div className="flex flex-col gap-2">
            <p className="flex text-md text-white font-semibold">Меню</p>
            <p className="flex text-sm text-white opacity-80 hover:text-red-600 cursor-pointer">
              Багц
            </p>
            <p className="flex text-sm text-white opacity-80 hover:text-red-600 cursor-pointer">
              Пицца
            </p>
            <p className="flex text-sm text-white opacity-80 hover:text-red-600 cursor-pointer">
              Ундаа
            </p>
            <p className="flex text-sm text-white opacity-80 hover:text-red-600 cursor-pointer">
              Нэмэлт
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex text-md text-white font-semibold">
              Бидний тухай
            </p>
            <p className="flex text-sm text-white opacity-80 hover:text-red-600 cursor-pointer">
              Пицца Хат
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex text-md text-white font-semibold">
              Үйлчилгээний нөхцөл
            </p>
            <p className="flex text-sm text-white opacity-80 hover:text-red-600 cursor-pointer">
              Нууцлалын бодлого
            </p>
            <p className="flex text-sm text-white opacity-80 hover:text-red-600 cursor-pointer">
              Үйлчилгээний нөхцөл
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex text-md text-white font-semibold">
              Харилцагчийн үйлчилгээ
            </p>
            <p className="flex text-sm text-white opacity-80 hover:text-red-600 cursor-pointer">
              Бидэнтэй холбогдох
            </p>
            <p className="flex text-sm text-white opacity-80 hover:text-red-600 cursor-pointer">
              Түгээмэл асуултууд
            </p>
          </div>
          <div className="flex flex-col gap-2 2xl:block xl:block lg:block md:block hidden">
            <p className="flex text-md text-white font-semibold">
              Pizza Hut аппликейшнийг App Store -с татаарай.
            </p>
            <div className="flex flex-row gap-1 mt-2">
              <img
                src="https://pizzahut.mn/assets/Images/applestore.png"
                className="w-28"
              ></img>
              <img
                src="https://pizzahut.mn/assets/Images/playstore.png"
                className="w-28"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-4 flex items-center justify-center">
        <p className="text-white text-xs flex">
          © 2024 _-Yum! III (Asia) Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
}
