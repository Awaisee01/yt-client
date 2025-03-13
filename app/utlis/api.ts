




import axios from "axios";
const API_URL = "https://web-production-19ddf.up.railway.app/";

// const API_URL = "http://127.0.0.1:8000"; // Adjust if running on Rai/lway

export const downloadMedia = async (url: string, format: "video" | "audio") => {
  try {
    const response = await axios.get(`${API_URL}/download`, {
      params: { url, format },
      responseType: "blob", // 👈 IMPORTANT
    });

    const filename = format === "video" ? "video.mp4" : "audio.mp3";

    // Create a download link
    const blob = new Blob([response.data], { type: response.headers["content-type"] });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return { success: true };
  } catch (error) {
    console.error("Download failed:", error);
    return { success: false, error: "Failed to download media" };
  }
};





