import React from "react";
import "./index.css"
import {FaSearch} from "react-icons/fa";
import { statSearch } from "./client";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
// import { useSelector } from "react-redux";

function Heading() {
  // // make a title bar with three buttons in it

	const [searchTerm, setSearchTerm] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const handleSearch = async () => {
		try {
			const searchData = await statSearch(searchTerm);
			console.log("Search Data:", searchData);
			navigate("/Public/Home", { state: { searchData } });
		} catch (error) {
			console.log("Error occurred:", error);
			setErrorMessage(error.response.data.message);
			navigate("/Public/Home", { state: { errorMessage } });
		}
  };
	const handleChange = (e) => {
		setSearchTerm(e.target.value);
  };
  const navigate = useNavigate();
  
  return (
    <div className="heading">
      <h2>My NBA Page</h2>

      <div className="heading-center">
				<input
					type="text"
					placeholder="Search for Team, Player, or Statistic"
					value={searchTerm}
					onChange={handleChange}
				/>
				<button className="btn btn-light" onClick={handleSearch}>
 
					<FaSearch className="search-icon" />
				</button>
			</div>
      
      <span>
        <button
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>
          <button onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </span>
    </div>
  );
}
export default Heading;
