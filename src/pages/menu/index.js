import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Header } from "@/components/Header";
import Bags from "@/components/Bags";
import { Footer } from "@/components/Footer";

export default function Menu() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="w-full h-screen flex overflow-x-hidden">
      <div className="2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full h-screen">
        <Header selectedTab={selectedTab} handleTabChange={handleTabChange} />
      </div>
      <div className="2xl:block xl:block lg:block md:block sm:block hidden">
        <Bags />
      </div>
    </div>
  );
}
