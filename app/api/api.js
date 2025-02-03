import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all booths
export const AllBooths = async () => {
  try {
    const response = await api.get("/booths");
    return response.data;
  } catch (error) {
    console.error("Error fetching all booths:", error.message);
    throw error;  
  }
};

// Fetch a booth by ID
export const getBoothById = async (id) => {
  try {
    const response = await api.get(`/booths/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching booth with ID ${id}:`, error.message);
    throw error;
  }
};

// Update a booth
export const updateBooth = async (id, data) => {
  try {
    const response = await api.put(`/booths/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating booth with ID ${id}:`, error.message);
    throw error;
  }
};

// Create a new booth
export const createBooth = async (data) => {
  try {
    const response = await api.post("/booths", data);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating booth:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Delete a booth by ID
export const deleteBooth = async (id) => {
  try {
    const response = await api.delete(`/booths/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting booth with ID ${id}:`, error.message);
    throw error;
  }
};

export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);  
    formData.append("category", "general"); // Ensure category is included

    const response = await api.post("/files", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error details:", error.response?.data || error.message);
    throw error;
  }
}; 

export const getFiles = async (id) => {
  try {
    const response = await api.get(`/files/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching files:", error.message);
    throw error;
  }
};

export const generateQRCode = async (id) => {
  try {
    const response = await api.get(
      `/booth/generate-qr?booth_url=https://expo.com/booth/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error generating QR code for booth with ID ${id}:`,
      error.message
    );
    throw error;
  }
};
