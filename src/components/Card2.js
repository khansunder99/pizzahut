import React from "react";

export default function Card2({ cardImage, name, description, price }) {
  return (
    <div className="text-black w-[240px] h-[390px] bg-white flex justify-center items-center flex-col border border-1 rounded-lg group overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:shadow-lg w-full">
      <div
        style={{ backgroundImage: `url(${cardImage})` }}
        className="w-full h-[45%] bg-no-repeat bg-contain bg-center group-hover:bg-cover flex"
      ></div>
      <div className="w-full h-[50%] flex justify-center items-start flex-col p-2 gap-2">
        <p className="text-md flex font-semibold">{name}</p>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="flex flex-row justify-between items-center w-full">
          <p className="flex font-semibold text-sm">Сонгох Хэмжээ & Гурил</p>
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.6"
              stroke="currentColor"
              class="w-5 h-5 stroke-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
            <p className="flex text-sm font-semibold ml-1">2-4</p>
          </div>
        </div>
        <div className="flex flex-row w-full gap-2">
          <form className="w-1/2">
            <label
              for="size"
              className="block mb-2 text-sm font-medium text-gray-900"
            ></label>
            <select
              id="size"
              className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Дунд</option>
              <option value="">Том</option>
              <option value="">Жижиг</option>
            </select>
          </form>
          <form className="w-1/2">
            <label
              for="size"
              className="block mb-2 text-sm font-medium text-gray-900"
            ></label>
            <select
              id="size"
              className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Пан</option>
              <option value="">Уламжлалт</option>
            </select>
          </form>
        </div>
        <button className="w-30 h-12 bg-green-600 rounded text-white text-sm inline p-4 flex justify-between items-center gap-4 w-full mb-5">
          <p className="text-md">Сагсанд хийх</p>
          <p className="text-md">MNT {price}</p>
        </button>
      </div>
    </div>
  );
}
