import axios from "axios";
import React, { useState } from "react";
import Response from "../Response/Response";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import './searchBar.css';


function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async (e) => {
    console.log(searchInput);
    e.preventDefault();
    try {
      if(searchInput !== ""){
        const resss = await axios(`https://api.github.com/users/${searchInput}/repos`);
      setData(resss)
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
      
      {searchInput !== "" && (<Response repos={data} user={searchInput} searchInput={searchInput} />)}
      

    </>
  );
}

export default SearchBar;
