

import axios from "axios";

// Use the deployed Flask backend URL
const API_URL = "https://df74b9ca-feb6-4dcf-b7f8-c7e611792df9-00-3mmd9gt39qf3b.sisko.replit.dev";

export const downloadVideo = async (url: string) => {
  try {
    const response = await axios.get(`${API_URL}/download`, {
      params: { url },
      responseType: "blob", // Ensure we receive the video file
    });

    // Extract filename from Content-Disposition header
    const contentDisposition = response.headers["content-disposition"];
    let filename = "video.mp4"; // Default filename

    if (contentDisposition) {
      const match = contentDisposition.match(/filename="?([^"]+)"?/);
      if (match && match[1]) {
        filename = match[1]; // Extract filename safely
      }
    }

    // Create a blob URL and trigger the download
    const blob = new Blob([response.data], { type: "video/mp4" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error("Download failed:", error);
    throw new Error("Failed to download video");
  }
};
