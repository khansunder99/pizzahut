import React from "react";

export default function Home() {
  return (
    <div
      className="h-screen w-full flex flex-col items-center"
      style={{
        backgroundImage:
          "url('https://www.pizzahut.mn/assets/Images/background.jpg')",
      }}
    >
      <div className="rounded-full 2xl:w-[72px] xl:w-[72px] lg:w-[72px] md:w-[72px] sm:w-[72px] 2xl:h-[72px] xl:h-[72px] lg:h-[72px] md:h-[72px] sm:h-[72px] w-[52px] h-[52px] bg-white absolute 2xl:mt-4 xl:mt-4 lg:mt-4 md:mt-4 sm:mt-4 drop-shadow-md flex items-center justify-center">
        <img
          src="https://www.pizzahut.mn/assets/Images/pizzahut_logo.png"
          className="2xl:w-16 xl:w-16 lg:w-16 md:w-16 sm:w-16 w-[56px]"
        ></img>
      </div>
      <div className="2xl:h-16 xl:h-16 lg:h-12 md:h-16 sm:h-16 h-8 w-full bg-white flex"></div>
      <div className="flex flex-row mt-8 flex items-center 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-3/4 w-11/12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.8"
          stroke="currentColor"
          className="w-6 h-6 2xl:ml-32 xl:ml-28 md:ml-24 md:ml-20 ml-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <p className="text-lg text-slate-900 font-bold flex ml-1">
          Буцах
        </p>
      </div>

      <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-2/3 md:w-3/4 sm:w-3/4 w-11/12 bg-white mt-12 drop-shadow-lg rounded-md flex justify-center items-center flex-col py-4">
        <p className="text-xl text-slate-900 flex font-bold  2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-sm">
          Нэвтрэх
        </p>
        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-2/3 w-11/12 flex items-end flex-col">
          <div className="w-full mt-6 flex flex-col">
            <div className="flex flex-row">
              <p className="2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs text-slate-900 ">
                И-мэйл эсвэл Утасны дүгаар оруулах{" "}
              </p>
              <p className="text-red-600 ml-1">*</p>
            </div>
            <input
              className="mt-1 w-full placeholder-slate-500  h-12 rounded-md border-[1px] p-2 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs  border-slate-300 focus:border-blue-400 flex"
              placeholder="Э-мэйл эсвэл утасны дугаараа оруулна уу "
            ></input>
          </div>
          <div className="w-full mt-1">
            <div className="flex flex-row">
              <p className="2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs  text-slate-900">
                Нууц үг or
              </p>
              <p className="2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs  text-slate-900 underline underline-offset-2 ml-1">
                Нэг удаагийн код илгээх
              </p>
              <p className="text-red-600 ml-1">*</p>
            </div>
            <input
              className="mt-1 w-full placeholder-slate-500 h-12 rounded-md border-[1px] p-2 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs  border-slate-300 focus:border-blue-400 flex"
              placeholder="Нууц үг"
            ></input>
          </div>
          <p className="2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs  text-slate-900 flex underline underline-offset-2 mt-1">
            Нууц үг сэргээх
          </p>
          <button className="w-full h-[48px] bg-green-700 mt-4 rounded-md text-white 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-sm ">
            Нэвтрэх
          </button>
          <div className="w-full h-[1px] bg-slate-200 mt-5 "></div>
          <div className="flex flex-row mt-2 w-full flex items-center justify-center">
            <p className=" 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-sm text-slate-900">
              Бүртгүүлээгүй?
            </p>
            <p className=" 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-sm text-green-700 underline underline-offset-2 ml-2">
              Бүртгүүлэх
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
