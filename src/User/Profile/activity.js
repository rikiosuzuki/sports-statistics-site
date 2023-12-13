import React from "react";
import axios from "axios";

function Activity() {
  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      // Make a GET request to the API endpoint
      const response = await axios.get("https://api.example.com/data");

      // Access the data from the response
      const apiData = response.data;

      // Now you can use the data to update your website
      updateWebsite(apiData);
    } catch (error) {
      // Handle errors here
      console.error("Error fetching data:", error.message);
    }
  };

  // Function to update your website with the fetched data
  const updateWebsite = (data) => {
    // Update your HTML elements or manipulate the DOM as needed
    // For example:
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Fetched data: ${JSON.stringify(data)}`;
  };

  // Call the fetchData function when your page loads or when needed
  fetchData();

  return (
    <div style={{ marginLeft: "150px" }}>
      <h1>Activity page</h1>

    </div>
  );
}
export default Activity;
