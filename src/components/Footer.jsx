import React from 'react'
import { Link } from "react-router-dom";
import {AiFillCaretRight} from "react-icons/ai";
import {HiDesktopComputer} from "react-icons/hi";


const Footer = () => {
  return (
    <div>
      <div className='flex justify-around items-center w-full h-auto bg-white'>
        <ul className='p-6 w-auto'>
         
          <li><Link to="/service" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>POSサービス・機能</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/cashless" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>キャッシュレス対応</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/custom" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>カスタマイズ対応</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/plan" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>料金プラン</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/simulation" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>お見積りシュミレーション</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/colum" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>コラム</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/news" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>ニュース</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
          <li><Link to="/faq" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>FAQ</Link></li>
          <AiFillCaretRight className='mb-4' size={10}/>
        </ul>

        <div className='flex flex-col items-center justify-center'>
          <div className='flex justify-center bg-gray-300 h-56 w-96 py-10 rounded-lg'>
            <div className='flex flex-col h-36 items-center border-r-2 p-4'>
              <h1 className='text-xs '>オンライン商談</h1>
              <HiDesktopComputer className='my-2' size={60}/>
              <div className='bg-yellow-300 text-center rounded-full'>
                <p className='p-2 m-0 text-xs'>お申し込み</p>
              </div>
            </div>
            <div className='flex flex-col h-36 items-center border-r-2 p-4'>
              <h1 className='text-xs '>オンライン商談</h1>
              <HiDesktopComputer className='my-2' size={60}/>
              <div className='bg-yellow-300 text-center rounded-full'>
                <p className='p-2 m-0 text-xs'>お申し込み</p>
              </div>
            </div>
            <div className='flex flex-col h-36 items-center p-4'>
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