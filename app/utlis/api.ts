// import axios from "axios";

// // const API_URL = "http://localhost:5000/api/videos"; // Backend URL
// const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api/videos";


// export const downloadVideo = async (url: string) => {
//   try {
//     const response = await axios.get(`${API_URL}/download`, {
//       params: { url },
//       responseType: "blob", // Important for file downloads
//     });

//     // Create a blob URL and trigger a download
//     const link = document.createElement("a");
//     link.href = window.URL.createObjectURL(response.data);
//     link.setAttribute("download", "video.mp4");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   } catch (error) {
//     console.error("Download failed:", error);
//     throw error;
//   }
// };


import axios from "axios";

// Backend URL (use environment variable if available)
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api/videos";

export const downloadVideo = async (url: string) => {
  try {
    const response = await axios.get(`${API_URL}/download`, {
      params: { url },
      responseType: "blob", // Important for file downloads
    });

    // Extract the filename from the Content-Disposition header
    const contentDisposition = response.headers["content-disposition"];
    let filename = "video.mp4"; // Default filename
    if (contentDisposition && contentDisposition.includes("filename=")) {
      filename = contentDisposition
        .split("filename=")[1]
        .replace(/['"]/g, "") // Remove quotes
        .trim();
    }

    // Create a blob URL and trigger a download
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(response.data);
    link.setAttribute("download", filename); // Use the extracted filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href); // Clean up the blob URL
  } catch (error) {
    console.error("Download failed:", error);
    throw new Error("Failed to download video");
  }
};