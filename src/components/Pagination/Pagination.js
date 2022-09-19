import { Button } from '@mui/material';
import './pagination.css';
import React, { useEffect, useState } from 'react'

function Pagination({showPerPage,onPaginationChange,repos}) {
    const [counter,setCounter] = useState(1);
    
    useEffect(()=>{
      const value = showPerPage*counter;
      onPaginationChange(value-showPerPage,value);
    },[counter])

    const onClickButton = (type) => {
      if(type === "prev"){
        if(counter === 1){
          setCounter(1);
        }else{
          setCounter(counter-1);
        }
      }else{
        const temp = Math.ceil( repos.data.length / showPerPage );
        if( temp === counter){
          setCounter(counter);
        }else{
          setCounter(counter+1);
        }
      }
    }
  return (
    <div className='pagination'>
      <Button variant="contained" onClick={() => onClickButton("prev")}>Prev</Button>
      <Button variant='outlined' style={{color:"black"}}>{counter}/ {Math.ceil( repos.data.length / showPerPage )} </Button>
      <Button variant="contained" onClick={() => onClickButton("next")}>Next</Button>
    </div>
  )
}

export default Pagination