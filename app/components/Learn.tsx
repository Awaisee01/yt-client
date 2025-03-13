"use client";

import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import GetAppIcon from "@mui/icons-material/GetApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

const cardData = [
  {
    id: 1,
    title: "Paste the YouTube video URL",
    description:
      "Click on the Usage Guidelines and after reading it in full, if you agree with and will abide by the contents of the Guidelines, paste the YouTube video URL in the field provided.",
    icon: <LinkIcon className="text-blue-400 mb-2" fontSize="large" />,
  },
  {
    id: 2,
    title: "Download Video",
    description:
      'Click on the "Download" button to jump to the download page, select the clarity you need, then click on the download.',
    icon: <GetAppIcon className="text-green-400 mb-2" fontSize="large" />,
  },
  {
    id: 3,
    title: "Add Subtitles",
    description:
      "Click on the Add Captions button to seamlessly add captions to the video.",
    icon: <YouTubeIcon className="text-red-400 mb-2" fontSize="large" />,
  },
];

const Learn: React.FC = () => {
  return (
    <div className="bg-black  min-h-screen text-white flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-200 text-center">
        How to Download YouTube Videos
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-black border border-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start"
          >
            {card.icon}
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-400">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
