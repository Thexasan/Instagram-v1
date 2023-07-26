import React, { useState } from 'react';
const Search = ({modalShow}) => {
  
  return (
    <>
    <div className='h-screen bg-[#ffffff] absolute top-0 left-[70px] transition-transform' style={modalShow?{width:"400px"}:{width:"0"}}>

    </div>
     
    </>
  );
};
export default Search;