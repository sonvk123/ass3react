import { useState, useEffect } from "react";

const useApiData = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const jsonData = await response.json();
        setData(jsonData);

      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  return { data };
};

export default useApiData;
