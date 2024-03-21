import React, { useState } from "react";

export default function Home() {
  return (
    <div className="w-full h-full">
    <div className="fixed w-full h-[57px] bg-white flex items-center justify-end">
      <img className="w-[150px]  cursor-pointer mr-[725px] " src="https://www.pizzahut.mn/assets/Images/pizzahut-desktop-logo.svg"></img>
      <button className="w-[82px] h-[37px] mr-[7px]  border rounded text-gray-400 font-normal hover:text-red-500 hover:bg-slate-100 hover:border-none border-1 text-sm border-gray-300">English</button>
      <img className="w-[14px] mr-[8px]" src="https://www.pizzahut.mn/assets/Images/Icons/Account.svg"></img>
      <a className="hover:text-red-500 cursor-pointer hover:underline hover:underline-offset-1 text-gray-400 text-sm tracking-normal mr-[400px]">Нэвтрэх / Бүртгүүлэх</a>
    </div>
    <img className="md:2/3" src="https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/banners/hero/mongolia67615.jpg"></img>
       <div className="h-screen flex justify-center items-center">
      <div className="absolute mb-[800px] w-[440px] h-[190px] bg-white shadow-2xl rounded">
        <p className="ml-4 mt-4 text-lg font-semibold">Та хаягаа оруулна уу</p>
        <p className="ml-4 mt-1 text-base  ">Бүх хүргэлт хүрэхгүй хүргэдэг боллоо</p>
        <p className="ml-6 mt-6 text-base ">Та хаягаа оруулна уу</p>
        <div className="flex justify-center ">
        <input placeholder=" Хаягаа оруулах" className="mt-2 p-2 font-light focus:outline-none focus:border-blue-400 rounded w-[400px] h-[40px] border border-gray-300"></input>
        </div>
      </div>
      <div className=" mb-[1050px] flex items-center justify-center font-semibold cursor-pointer text-red-500 w-[250px] h-[80px] bg-white rounded">
        <p className="cursor-pointer"> Хүргэлтээр авах</p>
      </div>
      <p className="absolute font-bold mb-[450px]">Санал болгох багцууд</p>
      <div>
        <div className="absolute bg-gray-300 -translate-x-6 -translate-y-56 w-[480px] h-[1px]"></div>
        <div className="absolute bg-gray-300 -translate-x-[710px] -translate-y-56 w-[480px] h-[1px]"></div>
      </div>
      <img className="absolute rounded mr-[565px] -translate-y-[50px] "src="  https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/banners/tile-one/mongolia74780.jpg"></img>
      <img className ="absolute rounded ml-[580px] -translate-y-[50px] "src="https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/banners/tile-two/mongolia68088.jpg"></img>
      <button className="absolute bg-green-700 rounded hover:bg-green-800 w-[1111px] h-12 mt-[270px] ml-2 items-center flex justify-center text-white">Менюг харах</button>
    </div>
    </div>
  );
}
