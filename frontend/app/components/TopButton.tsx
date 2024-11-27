"use client"
import React, { useState } from "react";

const TapButton: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All subjects");

  const tabs = [
    "All subjects",
    "Food Technology",
    "Thermodynamics",
    "Engineering Math",
    "General Aptitude",
  ];

  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide p-4 bg-white rounded-lg border-b-2">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition ${
            activeTab === tab
              ? "bg-purple-700 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TapButton;
