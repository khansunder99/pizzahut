import React from "react";
import { Footer } from "@/components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full h-full">
      <div className="fixed w-full h-[57px] bg-white flex items-center justify-between px-4">
        <img
          className="w-32 md:w-40 cursor-pointer"
          src="https://www.pizzahut.mn/assets/Images/pizzahut-desktop-logo.svg"
          alt="Pizza Hut Logo"
        />
        <div className="md:flex flex items-center gap-4">
          <button className="w-20 h-9 border rounded text-gray-400 font-normal hover:text-red-500 hover:bg-slate-100 hover:border-none border-1 text-sm border-gray-300">
            English
          </button>
          <img
            className="w-5"
            src="https://www.pizzahut.mn/assets/Images/Icons/Account.svg"
            alt="Account Icon"
          />
          <div className="flex flex-row gap-1">
            <a href="/login" className="hover:text-red-500 cursor-pointer hover:underline hover:underline-offset-1 text-gray-400 text-sm tracking-normal">
              Нэвтрэх
            </a>
            <p className="cursor-pointer text-gray-400 text-sm tracking-normal">
              /
            </p>
            <a href="/register" className="hover:text-red-500 cursor-pointer hover:underline hover:underline-offset-1 text-gray-400 text-sm tracking-normal">
              Бүртгүүлэх
            </a>
          </div>
        </div>
      </div>
      <img
        className="md:2/3"
        src="https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/banners/hero/mongolia67615.jpg"
      ></img>
      <div className="flex justify-center items-center flex-col md:-translate-y-24">
        <div className="flex items-center justify-center font-semibold cursor-pointer text-red-500 w-1/6 md:w-1/6 h-16 bg-white rounded">
          <p className="cursor-pointer  md:text-base xl:text-base text-sm">
            {" "}
            Хүргэлтээр авах
          </p>
        </div>
        <div className="w-1/4 md:2/4 py-6 h-auto w-1/4  bg-white shadow-2xl rounded-md ">
          <p className="ml-4 mt-4 md:text-lg xl:text-lg font-semibold text-sm">
            Та хаягаа оруулна уу
          </p>
          <p className="ml-4 mt-1 md:text-base xl:text-base text-sm">
            Бүх хүргэлт хүрэхгүй хүргэдэг боллоо
          </p>
          <p className="ml-4 mt-6 md:text-base xl:text-base text-sm">
            Та хаягаа оруулна уу
          </p>
          <div className="flex justify-center">
            <input
              placeholder=" Хаягаа оруулах"
              className="mt-2 p-2 font-light focus:outline-none focus:border-blue-400 rounded w-full w-11/12 md:w-11/12 h-[40px] border border-gray-300"
            ></input>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-8 items-center">
          <div className="bg-gray-300 w-full md:w-[400px] h-[1px]"></div>
          <p className="font-bold mt-4 md:mt-0">Санал болгох багцууд</p>
          <div className="bg-gray-300 w-full md:w-[400px] h-[1px]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <img
            className="rounded-md"
            src="  https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/banners/tile-one/mongolia74780.jpg"
          ></img>
          <img
            className="rounded-md"
            src="https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/banners/tile-two/mongolia68088.jpg"
          ></img>
        </div>
        <button
          onClick={() => router.push("/menu")}
          className="bg-green-700 rounded-md hover:bg-green-800 w-7/12 md:w-7/12 h-12 mt-8  items-center flex justify-center text-white"
        >
          Менюг харах
        </button>
      </div>
      <Footer />
    </div>
  );
}
