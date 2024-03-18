import React, { useState } from "react";

export default function Home() {
  return (
    <div className="h-screen w-full flex-row">
      <div className="w-3/4 h-full flex flex-col">
        <div className="w-full h-24 flex flex-col">
          <div className="w-full h-1/2 flex flex-row justify-between px-24 items-center">
            <img
              src="https://pizzahut.mn/assets/Images/pizzahut-desktop-logo.svg"
              className="w-36"
            ></img>
            <div className="flex flex-row flex items-center gap-12">
              <div className="flex gap-2  items-center">
                <img
                  src="https://pizzahut.mn/assets/Images/Icons/Takeaway.svg"
                  className="w-4"
                ></img>
                <p className="text-sm text-slate-500">Сонгосон салбар:</p>
                <a className="text-sm text-slate-500 flex font-bold cursor-pointer hover:text-red-600 hover:underline hover:underline-offset-1">
                  PH-Төв талбай
                </a>
                <a className="text-xs text-red-600 flex underline underline-offset-auto cursor-pointer">
                  Өөрчлөх
                </a>
              </div>
              <div className="flex gap-1 items-center">
                <img
                  src="https://pizzahut.mn/assets/Images/Icons/Account.svg"
                  className="w-4 mr-1"
                ></img>
                <a className="text-sm text-slate-500 flex hover:text-red-600 hover:underline hover:underline-offset-1 cursor-pointer">
                  Нэвтрэх
                </a>
                <p className="text-sm text-slate-500">/</p>
                <a className="text-sm text-slate-500 flex hover:text-red-600 hover:underline hover:underline-offset-1 cursor-pointer">
                  Бүртгүүлэх
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 flex flex-row border-t-[1px] border-b-[1px] border-slate-300 px-4">
            <div className="h-full w-1/4 flex items-center justify-center font-semibold text-white border-l-[1px] border-r-[1px] border-slate-300 bg-cover bg-center bg-[url('https://pizzahut.mn/nav-active-bg.4ae245653e18d6c7.jpg')]">
              <p className="flex font-semibold text-white">БАГЦ</p>
            </div>
            <div className="h-full w-1/4 flex items-center justify-center border-r-[1px] border-slate-300">
              <p className="flex font-semibold text-slate-900">ПИЦЦА</p>
            </div>
            <div className="h-full w-1/4 flex items-center justify-center font-semibold text-slate-900 border-r-[1px] border-slate-300">
              <p className="flex font-semibold text-slate-900">УНДАА</p>
            </div>
            <div className="h-full w-1/4 flex items-center justify-center font-semibold text-slate-900 border-r-[1px] border-slate-300">
              <p className="flex font-semibold text-slate-900">НЭМЭЛТ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 h-full fixed bg-green-400"></div>
    </div>
  );
}
