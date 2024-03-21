import React from "react";
import { useRouter } from "next/router";
import { Footer } from "@/components/Footer";

export default function Register() {
  const router = useRouter();

  return (
    <>
      <div
        className="h-screen w-full flex flex-col items-center"
        style={{
          backgroundImage:
            "url('https://www.pizzahut.mn/assets/Images/background.jpg')",
        }}
      >
        <div className="rounded-full 2xl:w-[72px] xl:w-[72px] lg:w-[72px] md:w-[72px] sm:w-[72px] 2xl:h-[72px] xl:h-[72px] lg:h-[72px] md:h-[72px] sm:h-[72px] w-[52px] h-[52px] bg-white absolute 2xl:mt-4 xl:mt-4 lg:mt-4 md:mt-4 sm:mt-4 drop-shadow-md flex items-center justify-center">
          <button onClick={() => router.push("/")}>
            <img
              src="https://www.pizzahut.mn/assets/Images/pizzahut_logo.png"
              className="2xl:w-16 xl:w-16 lg:w-16 md:w-16 sm:w-16 w-[56px]"
            ></img>
          </button>
        </div>
        <div className="2xl:h-16 xl:h-16 lg:h-12 md:h-12 sm:h-12 h-8  w-full bg-white flex"></div>
        <div className="flex flex-row my-8 flex items-center 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-3/4 w-11/12">
          <button
            onClick={() => router.push("/")}
            className="flex flex-row items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.8"
              stroke="currentColor"
              className="w-6 h-6 2xl:ml-32 xl:ml-28 md:ml-24 md:ml-20 ml-0 stroke-black cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <p className="text-lg text-slate-900 font-bold flex ml-1">Буцах</p>
          </button>
        </div>

        <div className="2xl:w-1/2 xl:w-1/2 lg:w-2/3 md:w-3/4 sm:w-3/4 w-11/12 bg-white drop-shadow-lg rounded-md flex justify-center items-center flex-col">
          <div className="2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-4/5 w-11/12 flex items-center justify-center">
            <p className="mt-8 text-xl text-black 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md flex font-bold justify-center items-center">
              Байхгүй бол бүртгүүлэх боломжтой Пицца Хат
            </p>
          </div>
          <div className="2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-4/5 w-11/12 flex flex-col">
            <div className=" w-full  mt-6 flex flex-col">
              <div className="flex flex-row">
                <p className="text-sm 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs text-slate-900 ">
                  Овог, Нэр{" "}
                </p>
                <p className="text-red-600 ml-1">*</p>
              </div>
              <input
                className="mt-1 w-full placeholder-slate-500 2xl:text-sm xl:text-sm lg:text-sm sm:text-sm text-xs h-12 rounded-md border-[1px] p-2 text-sm border-slate-300 focus:border-blue-400 flex"
                placeholder="Овог, Нэрээ бичнэ үү "
              ></input>
            </div>
            <div className=" w-full mt-1">
              <div className="flex flex-row">
                <p className="text-sm 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs text-slate-900">
                  Утасны дугаар
                </p>
                <p className="text-red-600 ml-1">*</p>
              </div>
              <div className="w-full flex flex-row ">
                <div className="w-20 h-12 border-[1px] border-slate-300 bg-slate-100 mt-1 rounded-sm flex items-center">
                  <p className="text-sm 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs text-slate-400 pl-4">
                    976
                  </p>
                </div>
                <input
                  className="mt-1 w-full placeholder-slate-500 h-12 2xl:text-sm xl:text-sm lg:text-sm sm:text-sm text-xs rounded-sm border-[1px] p-2 text-sm border-slate-300 focus:border-blue-400 flex"
                  placeholder=" Утасны дугаараа оруулна уу"
                ></input>
              </div>
            </div>

            <div className=" w-full ">
              <div className="flex flex-row">
                <p className="text-sm mt-4 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs text-slate-900">
                  И-Мэйл хаяг
                </p>
              </div>

              <input
                className="mt-1 w-full placeholder-slate-500 h-12 2xl:text-sm xl:text-sm lg:text-sm sm:text-sm text-xs rounded-md border-[1px] p-2 text-sm border-slate-300 focus:border-blue-400 flex"
                placeholder="И-Мэйл хаягаа оруулна уу"
              ></input>
            </div>

            <div className=" w-full mt-1">
              <div className="flex flex-row">
                <p className="text-sm 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs text-slate-900">
                  Нууц Үг
                </p>
                <p className="text-red-600 ml-1">*</p>
              </div>

              <input
                className="mt-1 w-full placeholder-slate-500 h-12 2xl:text-sm xl:text-sm lg:text-sm sm:text-sm text-xs rounded-md border-[1px] p-2 text-sm border-slate-300 focus:border-blue-400 flex"
                placeholder="Нууц үг"
              ></input>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  className=" mt-3 checked:bg-blue-500 ... cursor-pointer"
                />
                <p className="text-sm 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs ml-2 mt-3 text-slate-900 flex flex-row">
                  Зөвшөөрөх Пицца Хат
                  <p className="text-green-700 underline underline-offset-2 ml-1 cursor-pointer">
                    Үйлчилгээний нөхцөл
                  </p>
                </p>
              </div>
              <button className="w-full h-[48px] bg-[#0a8020] mt-4 rounded-md text-white ">
                Бүртгүүлэх
              </button>
            </div>
            <div className="grid grid-rows-2 mb-8">
              <div className="w-full h-[1px] bg-slate-200 mt-5 "></div>
              <div className="flex justify-center mt-2">
                <p className="2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-sm text-slate-900">
                  Хэрэв та бүртгэлтэй бол?
                </p>
                <a
                  href="/login"
                  className="2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-sm text-green-700 underline underline-offset-2 ml-2"
                >
                  Нэвтрэх
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
