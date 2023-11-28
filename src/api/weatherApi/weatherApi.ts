import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const search = async (location: string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`
    );
    console.log(data);
    if (data.location.name) {
      return data;
    }
  } catch (error) {
    console.error(error);
    return {error}
  }
};
