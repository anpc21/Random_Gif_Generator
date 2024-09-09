import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (tag) => {
    setLoading(true);
    const mod_url = tag ? `${url}&tag=${tag}` : url;
    let response = await axios.get(mod_url);
    if (!response.data.data || response.data.data.length === 0) {
      console.warn("No data found for the tag, fetching without tag...");
      response = await axios.get(url); 
    }
    const imagesrc = response.data.data.images.downsized.url;
    setGif(imagesrc);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
