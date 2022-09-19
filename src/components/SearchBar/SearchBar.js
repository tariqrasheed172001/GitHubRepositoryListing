import axios from "axios";
import React, { useState } from "react";
import Response from "../Response/Response";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import './searchBar.css';
import { RotatingLines } from "react-loader-spinner";


function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async (e) => {
    console.log(searchInput);
    e.preventDefault();
    setLoading(true);
    try {
      if(searchInput !== ""){
        const resss = await axios(`https://api.github.com/users/${searchInput}/repos`);
      setData(resss)
      setLoading(false);
      }else{
        alert("Enter user name")
      }
      
    } catch (error) {
      console.log(error);
      alert("user Name not found")
    }
    console.log(data);
  };
  return (
    <>
      <div className="search">
          <TextField className="search-input" required type="text" value={searchInput} id="standard-basic"  onChange={handleChange} label="GitHub user name" variant="standard" />
          <Button onClick={handleClick} type="submit" variant="contained">Search</Button>
        
      </div>
      
      {loading ? <div className="pageLoader"><RotatingLines
        strokeColor="#1976d2"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      /></div>  : (searchInput !== "" &&  <Response repos={data} user={searchInput} searchInput={searchInput} />) }

    </>
  );
}

export default SearchBar;
