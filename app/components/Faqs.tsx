"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this YouTube downloader free to use?",
    answer: "Yes! This tool is completely free to use for downloading YouTube videos and audio.",
  },
  {
    question: "Can I download YouTube videos in MP3 format?",
    answer: "Yes, you can select 'Download Audio (MP3)' to extract audio from YouTube videos.",
  },
  {
    question: "Is downloading YouTube videos legal?",
    answer: "Downloading videos is allowed only for personal use. Make sure you comply with YouTube’s terms of service.",
  },
  {
    question: "Why is the download taking too long?",
    answer: "The speed depends on your internet connection and the video size. Try refreshing the page if it’s too slow.",
  },
  {
    question: "Where are the downloaded files saved?",
    answer: "The files are saved in your browser’s default 'Downloads' folder.",
  },
];

const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white p-6">
      <h1 className="text-4xl font-bold mb-8">FAQs - YouTube Downloader</h1>
      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className="w-full text-left py-6 px-5 text-lg font-medium flex justify-between items-center bg-black "
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="p-4 bg-gray-800 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
