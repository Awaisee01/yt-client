// 'use client'

// import { useState } from "react";
// import { downloadVideo } from "./utlis/api";

// export default function DownloadPage() {
//   const [url, setUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleDownload = async () => {
//     setError("");
//     if (!url.trim()) {
//       setError("Please enter a YouTube URL");
//       return;
//     }

//     setLoading(true);
//     try {
//       await downloadVideo(url);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : "Unknown error";
//       console.error("Download error:", errorMessage);
//       setError(`Failed to download video: ${errorMessage}`);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen text-black bg-gray-100 p-6">
//       <h1 className="text-2xl font-bold mb-4">YouTube Video Downloader</h1>
//       <input
//         type="text"
//         placeholder="Enter YouTube URL..."
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         className="border rounded-lg p-2 w-96"
//       />
//       <button
//         onClick={handleDownload}
//         disabled={loading}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//       >
//         {loading ? "Downloading..." : "Download"}
//       </button>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// }



'use client';

import { useState } from "react";
import { downloadVideo } from "./utlis/api";

export default function DownloadPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = async () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen text-black bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">YouTube Video Downloader</h1>
      <input
        type="text"
        placeholder="Enter YouTube URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border rounded-lg p-2 w-96"
      />
      <button
        onClick={handleDownload}
        disabled={loading}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        {loading ? "Downloading..." : "Download"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}