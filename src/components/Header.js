import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Extra1 from "@/components/Extra1";
import Extra2 from "@/components/Extra2";
import Extra3 from "@/components/Extra3";
import Extra4 from "@/components/Extra4";

export function Header({ selectedTab, handleTabChange }) {
  return (
    <div className="w-full h-24 flex flex-col">
      <div className="w-full h-1/2 flex flex-row justify-between px-24 items-center">
        <img
          src="https://pizzahut.mn/assets/Images/pizzahut-desktop-logo.svg"
          className="w-36"
          alt="Pizza Hut Logo"
        />
        <div className="flex flex-row flex items-center gap-12">
          <div className="flex gap-2 items-center">
            <img
              src="https://pizzahut.mn/assets/Images/Icons/Takeaway.svg"
              className="w-4"
              alt="Takeaway Icon"
            />
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
              alt="Account Icon"
            />
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
      <Tabs
        selectedIndex={selectedTab}
        onSelect={handleTabChange}
        className="h-1/2"
      >
        <TabList className="flex flex-row border-t-[1px] border-b-[1px] border-slate-300 px-4 h-full">
          <Tab
            className="h-full w-1/4 flex items-center justify-center border-r-[1px] border-slate-300"
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
            <p className="flex font-semibold">БАГЦ</p>
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
            <p className="flex font-semibold">ПИЦЦА</p>
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
            <p className="flex font-semibold">УНДАА</p>
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
            <p className="flex font-semibold">НЭМЭЛТ</p>
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
  );
}
