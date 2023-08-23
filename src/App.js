import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [bestRankedUniversity, setBestRankedUniversity] = useState(null);

  useEffect(() => {
    async function fetchBestRankedUniversity() {
      const options = {
        method: "GET",
        url: "https://world-university-rankings.p.rapidapi.com/university/rankings",
        params: {
          filterByCountry: "YourCountry", // Replace with your desired country
          page: "1",
          size: "1",
        },
        headers: {
          "X-RapidAPI-Key":
            "1310ec4b39msh97a75361d93c0ffp12e226jsncbc99f219802", // Replace with your RapidAPI key
          "X-RapidAPI-Host": "world-university-rankings.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        if (response.data.data.length > 0) {
          setBestRankedUniversity(response.data.data[0].name);
        } else {
          setBestRankedUniversity(
            "No university found for the given criteria."
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchBestRankedUniversity();
  }, []);

  return (
    <div className="App">
      {bestRankedUniversity ? (
        <p>Best-ranked university: {bestRankedUniversity}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
