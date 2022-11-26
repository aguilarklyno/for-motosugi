import React from 'react'
import i_01 from "../01-images/image-01.png";

const Hero = () => {
  return (
    <>
      <img className='w-full' src={i_01}/>
      <h1 className='md:hidden mt-16 text-center text-2xl'>店舗の用途に合わせて自由自在に設計する</h1>
      <h1 className='md:hidden my-16 text-center font-bold text-5xl'>高性能Android型<br/>クラウドPOSレジ</h1>
      <div className='md:hidden text-center mx-auto mb-16 w-4/5 rounded-3xl bg-yellow-300'>
        <p className='text-xl py-4'>3分でわかる「CASHIER」</p>
        <h1 className='font-bold text-4xl pb-4'>今すぐダウンロード</h1>
      </div>
    </>
  )
}

export default Hero