

'use client';

import { useState } from "react";
import { downloadMedia } from "../utlis/api"; // Updated function

const Downloader: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [format, setFormat] = useState<"video" | "audio">("video"); // Default to video
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleDownload = async (): Promise<void> => {
    setError("");
    setSuccessMessage("");

    if (!url.trim()) {
      setError("Please enter a YouTube URL");
      return;
    }

    setLoading(true);
    try {
      await downloadMedia(url, format); // Call function with selected format

      // Show success message
      setSuccessMessage(`✅ ${format.toUpperCase()} downloaded successfully!`);

      // Clear input field
      setUrl("");

      // Refresh page after 3 seconds
     
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      console.error("Download error:", errorMessage);
      setError(`❌ Failed to download ${format}: ${errorMessage}`);
    }
    setLoading(false);
  };

  return (
    <div className="home-bg text-white flex justify-center items-center flex-col p-4">
      <div className="z-10 bg-black py-8 px-2 sm:py-10 sm:px-12 md:py-16 md:px-20 w-full max-w-5xl rounded-lg">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center">
          YouTube Downloader
        </h1>
        <p className="text-center mt-7 text-sm sm:text-lg font-light text-gray-300">
          Download any public video from YouTube, or extract audio!
        </p>
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Enter YouTube URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border my-10 p-2 py-3 w-full md:w-xl sm:w-96 outline-0 text-white"
          />
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as "video" | "audio")}
            className="border bg-black p-2 py-3 w-full sm:w-auto text-white"
          >
            <option value="video">Download Video (MP4)</option>
            <option value="audio">Download Audio (MP3)</option>
          </select>
          <button
            onClick={handleDownload}
            disabled={loading}
            className="text-lg bg-white text-black px-8 sm:px-16 py-3 w-full sm:w-auto hover:bg-gray-100 transition duration-200 mt-4"
          >
            {loading ? `Downloading start ${format}...` : `Download ${format}`}
          </button>
        </div>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        {successMessage && <p className="text-green-500 mt-2 text-center">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Downloader;
