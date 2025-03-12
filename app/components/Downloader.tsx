"use client";

import { useState } from "react";
import { downloadVideo } from "../utlis/api"; // Corrected import path
// import Navbar from "./Navbar";
// import { Button, TextField, Typography, Container } from "@mui/material";

const Downloader: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleDownload = async (): Promise<void> => {
    setError("");
    if (!url.trim()) {
      setError("Please enter a YouTube URL");
      return;
    }

    setLoading(true);
    try {
      await downloadVideo(url);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      console.error("Download error:", errorMessage);
      setError(`Failed to download video: ${errorMessage}`);
    }
    setLoading(false);
  };

  return (
    <div className="home-bg text-white flex justify-center items-center flex-col  p-4">
    <div className="z-10  bg-black py-8 px-2 sm:py-10 sm:px-12 md:py-16 md:px-20 w-full max-w-5xl rounded-lg">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl  font-bold  text-center">YouTube Video Downloader</h1>
      <p className="text-center mt-7 text-sm sm:text-lg font-light text-gray-300">Download any public video from YouTube, transcribe it to text, extract or add subtitles!</p>
      <div className="flex flex-col items-center  justify-center">
        <input
          type="text"
          placeholder="Enter YouTube URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border my-10 p-2 py-3 w-full md:w-xl sm:w-96 outline-0 text-white"
        />
        <button
          onClick={handleDownload}
          disabled={loading}
          className=" text-lg bg-white text-black px-8 sm:px-16 py-3 w-full sm:w-auto hover:bg-gray-100 transition duration-200"
        >
          {loading ? "Downloading..." : "Download"}
        </button>
      </div>
      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
    </div>
  </div>
  );
};

export default Downloader;
