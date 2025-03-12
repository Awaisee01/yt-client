"use client";

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black mt-20   text-gray-400 py-20  text-center">
      {/* Website Name */}
      <h2 className="text-2xl font-semibold text-white mb-6">YouTube Downloader</h2>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="text-blue-500 hover:text-blue-400 transition-transform transform hover:scale-110" fontSize="large" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="text-blue-400 hover:text-blue-300 transition-transform transform hover:scale-110" fontSize="large" />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <TelegramIcon className="text-blue-500 hover:text-blue-400 transition-transform transform hover:scale-110" fontSize="large" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon className="text-red-500 hover:text-red-400 transition-transform transform hover:scale-110" fontSize="large" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="text-pink-500 hover:text-pink-400 transition-transform transform hover:scale-110" fontSize="large" />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All Rights Reserved by Awais Asif.</p>
    </footer>
  );
};

export default Footer;
