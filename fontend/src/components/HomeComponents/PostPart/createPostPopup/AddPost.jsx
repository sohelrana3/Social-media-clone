import React from 'react'
import {Media} from "../../../../svg/Media"
import {LiveIcon} from "../../../../svg/Live"
import {CircleProfileIcon} from "../../../../svg/Circleprofile"

const AddPost = ({setshow, show}) => {
  return (
    <div className='p-2 border border-gray-100 rounded-md flex justify-between items-center'>
        <span>Add to you Post</span>
        <div className='flex items-center gap-x-3'>
        <div className={`w-10 h-10 rounded-md cursor-pointer flex justify-center items-center hover:bg-gray-400 transition-all duration-100 ease-linear ${show && "bg-gray-200"}`} onClick={()=> setshow(true)}>
            <Media />
        </div>
        <div className='w-10 h-10 rounded-md cursor-pointer flex justify-center items-center hover:bg-gray-400 transition-all duration-100 ease-linear'>
            <LiveIcon />
        </div>
        <div className='w-10 h-10 rounded-md cursor-pointer flex justify-center items-center hover:bg-gray-400 transition-all duration-100 ease-linear'>
            <CircleProfileIcon />
        </div>
        </div>
       
    </div>
  )
}

export default AddPost