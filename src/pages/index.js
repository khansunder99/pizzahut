import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Header } from "@/components/Header";
import Bags from "@/components/Bags";

export default function Menu() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="w-full h-screen flex overflow-x-hidden">
      <div className="w-3/4 h-screen">
        <Header selectedTab={selectedTab} handleTabChange={handleTabChange} />
      </div>
      <Bags />
    </div>
  );
}
