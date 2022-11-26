import React from 'react'
import { Link } from "react-router-dom";
import {AiFillCaretRight} from "react-icons/ai";
import {HiDesktopComputer} from "react-icons/hi";


const Footer = () => {
  return (
    <div>
      <div className='flex md:flex-row flex-col justify-around items-center w-full h-auto bg-white'>
        <ul className='p-6 my-2 w-auto'>
         
          <li><Link to="/service" className='text-lg'>POSサービス・機能</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/cashless" className='text-lg'>キャッシュレス対応</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/custom" className='text-lg'>カスタマイズ対応</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/plan" className='text-lg'>料金プラン</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/simulation" className='text-lg'>お見積りシュミレーション</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/colum" className='text-lg'>コラム</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/news" className='text-lg'>ニュース</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/faq" className='text-lg'>FAQ</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
        </ul>

        <div className='flex flex-col items-center justify-center'>
          <div className='flex md:flex-row flex-col justify-center bg-gray-200 h-auto w-auto py-12 rounded-lg'>
            <div className='flex flex-col h-36 items-center md:border-r-2 md:border-b-0 border-b-2 border-gray-300 px-4  md:mx-0 mx-32'>
              <h1 className='text-xs '>オンライン商談</h1>
              <HiDesktopComputer className='my-2' size={60}/>
              <div className='bg-yellow-300 text-center rounded-full'>
                <p className='p-2 m-0 text-xs'>お申し込み</p>
              </div>
            </div>
            <div className='flex flex-col h-36 items-center md:border-r-2 md:border-b-0 border-b-2 border-gray-300 px-4 md:mt-0 mt-4 md:mx-0 mx-32'>
              <h1 className='text-xs '>オンライン商談</h1>
              <HiDesktopComputer className='my-2' size={60}/>
              <div className='bg-yellow-300 text-center rounded-full'>
                <p className='p-2 m-0 text-xs'>お申し込み</p>
              </div>
            </div>
            <div className='flex flex-col h-36 items-center border-gray-300 px-4 md:mt-0 mt-4 md:mx-0 mx-32'>
              <h1 className='text-xs '>オンライン商談</h1>
              <HiDesktopComputer className='my-2' size={60}/>
              <div className='bg-yellow-300 text-center rounded-full'>
                <p className='p-2 m-0 text-xs'>お申し込み</p>
              </div>
            </div>
          </div>
          <div className='bg-yellow-300 h-20 w-64 rounded-lg mt-4 text-center'>
            <p className='py-2'>CASHIER COLUM</p>
            <p className='text-xs'>ストアビジネスの最新情報や<br/>役立つ情報をお届けします。</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer