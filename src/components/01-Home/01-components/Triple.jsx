import React from 'react'
import i_01 from "../01-images/triple-01.png"

const Triple = () => {
  return (
    <>
      <div　className='flex md:flex-row flex-col md:justify-center items-center w-full'>
        <img className='block md:mx-4 md:w-1/4 w-11/12 my-4' src={i_01}/>
        <img className='block md:mx-4 md:w-1/4 w-11/12 my-4' src={i_01}/>
        <img className='block md:mx-4 md:w-1/4 w-11/12 my-4' src={i_01}/>
      </div>
    </>
  )
}

export default Triple