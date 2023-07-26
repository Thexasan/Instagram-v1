import React from 'react'
import person from "../../assets/profile.jpg"
import "./History.css"
export default function History({image,title}) {
  return (
    <div>
        <img  src={image} alt="" className='rounded-[50%] w-[60px] h-[60px] borderrlinear m-auto'/>
        <p className='text-center text-[13px] text-[#000] dark:text-[#fff]'>{title}</p>
    </div>
  )
}