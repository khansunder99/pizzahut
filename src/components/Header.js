import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Extra1 from "@/components/Extra1";
import Extra2 from "@/components/Extra2";
import Extra3 from "@/components/Extra3";
import Extra4 from "@/components/Extra4";
import { useRouter } from "next/router";

export function Header({ selectedTab, handleTabChange }) {
  const router = useRouter();

  return (
    <>
    <div className="w-full 2xl:h-24 xl:h-24 lg:h-24 h-20 flex flex-col">
      <div className="w-full h-1/2 flex flex-row justify-between 2xl:px-24 xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 items-center">
        <button onClick={() => router.push("/")}>
          <img
            src="https://pizzahut.mn/assets/Images/pizzahut-desktop-logo.svg"
            className="2xl:w-36 xl:w-36 lg:w-36 w-32"
            alt="Pizza Hut Logo"
          />
        </button>
        <div className="flex flex-row flex items-center 2xl:gap-12 xl:gap-12 lg:gap-12 gap-4">
          <div className="2xl:block xl:block lg:block md:block sm:block hidden">
            <div className="flex 2xl:gap-2 xl:gap-2 lg:gap-2 gap-1 items-center">
              <img
                src="https://pizzahut.mn/assets/Images/Icons/Takeaway.svg"
                className="w-4 2xl:block xl:block lg:block hidden"
                alt="Takeaway Icon"
              />
              <p className="2xl:text-sm xl:text-sm lg:text-sm text-xs text-slate-500 2xl:block xl:block lg:block md:block hidden">Сонгосон салбар:</p>
              <a className="2xl:text-sm xl:text-sm lg:text-sm text-xs text-slate-500 flex font-bold cursor-pointer hover:text-red-600 hover:underline hover:underline-offset-1 2xl:block xl:block hidden">
                PH-Төв талбай
              </a>
              <a className="2xl:text-sm xl:text-sm lg:text-sm text-xs text-red-600 flex underline underline-offset-auto cursor-pointer 2xl:block xl:block lg:block md:block hidden">
                Өөрчлөх
              </a>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <img
              src="https://pizzahut.mn/assets/Images/Icons/Account.svg"
              className="w-4 mr-1"
              alt="Account Icon"
            />
            <a
              href="/login"
              className="2xl:text-sm xl:text-sm lg:text-sm text-xs text-slate-500 flex hover:text-red-600 hover:underline hover:underline-offset-1 cursor-pointer"
            >
              Нэвтрэх
            </a>
            <p className="2xl:text-sm xl:text-sm lg:text-sm text-xs text-slate-500">/</p>
            <a
              href="/register"
              className="2xl:text-sm xl:text-sm lg:text-sm text-xs text-slate-500 flex hover:text-red-600 hover:underline hover:underline-offset-1 cursor-pointer"
            >
              Бүртгүүлэх
            </a>
          </div>
        </div>
      </div>
      <Tabs
        selectedIndex={selectedTab}
        onSelect={handleTabChange}
        className="h-1/2"
      >
        <TabList className="flex flex-row border-t-[1px] border-b-[1px] border-slate-300 px-4 h-full">
          <Tab
            className="h-full w-1/4 flex items-center justify-center border-r-[1px] border-l-[1px] border-slate-300"
            selectedClassName="selected-tab"
            style={
              selectedTab === 0
                ? {
                    backgroundImage:
                      'url("https://pizzahut.mn/nav-active-bg.4ae245653e18d6c7.jpg")',
                    color: "white",
                  }
                : { backgroundColor: "white", color: "black" }
            }
          >
            <p className="flex font-semibold 2xl:text-md xl:text-md lg:text-md text-sm">БАГЦ</p>
          </Tab>
          <Tab
            className="h-full w-1/4 flex items-center justify-center border-r-[1px] border-slate-300"
            selectedClassName="selected-tab"
            style={
              selectedTab === 1
                ? {
                    backgroundImage:
                      'url("https://pizzahut.mn/nav-active-bg.4ae245653e18d6c7.jpg")',
                    color: "white",
                  }
                : { backgroundColor: "white", color: "black" }
            }
          >
            <p className="flex font-semibold 2xl:text-md xl:text-md lg:text-md text-sm">ПИЦЦА</p>
          </Tab>
          <Tab
            className="h-full w-1/4 flex items-center justify-center border-r-[1px] font-semibold"
            selectedClassName="selected-tab"
            style={
              selectedTab === 2
                ? {
                    backgroundImage:
                      'url("https://pizzahut.mn/nav-active-bg.4ae245653e18d6c7.jpg")',
                    color: "white",
                  }
                : { backgroundColor: "white", color: "black" }
            }
          >
            <p className="flex font-semibold 2xl:text-md xl:text-md lg:text-md text-sm">УНДАА</p>
          </Tab>
          <Tab
            className="h-full w-1/4 flex items-center justify-center border-r-[1px] font-semibold"
            selectedClassName="selected-tab"
            style={
              selectedTab === 3
                ? {
                    backgroundImage:
                      'url("https://pizzahut.mn/nav-active-bg.4ae245653e18d6c7.jpg")',
                    color: "white",
                  }
                : { backgroundColor: "white", color: "black" }
            }
          >
            <p className="flex font-semibold 2xl:text-md xl:text-md lg:text-md text-sm">НЭМЭЛТ</p>
          </Tab>
        </TabList>
        <TabPanel>
          <Extra1 />
        </TabPanel>
        <TabPanel>
          <Extra2 />
        </TabPanel>
        <TabPanel>
          <Extra3 />
        </TabPanel>
        <TabPanel>
          <Extra4 />
        </TabPanel>
      </Tabs>
    </div>
    </>
  );
}
