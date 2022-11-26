import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Header = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  
  return (
    <div className='w-full h-24'>

      <div className='flex justify-between items-center w-full bg-yellow-200 text-black h-24 fixed z-10'>
        
        <div>
          <Link to="/home" className='2xl:text-5xl xl:text-3xl lg:text-xl md:text-lg text-4xl font-bold ml-4'> CASHIE<span className='text-gray-400'>R</span> </Link>
        </div>

        <nav>
          <ul className='hidden md:inline-flex mr-4'>
            <li><Link to="/service" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>POSサービス・機能</Link></li>
            <li><Link to="/cashless" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>キャッシュレス対応</Link></li>
            <li><Link to="/custom" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>カスタマイズ対応</Link></li>
            <li><Link to="/plan" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>料金プラン</Link></li>
            <li><Link to="/simulation" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>お見積りシュミレーション</Link></li>
            <li><Link to="/colum" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>コラム</Link></li>
            <li><Link to="/news" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>ニュース</Link></li>
            <li><Link to="/faq" className='2xl:text-base  xl:text-sm text-xs xl:mr-2 mx-0'>FAQ</Link></li>
          </ul>
        </nav>

        <div onClick={handleNav} className="block md:hidden mr-20">
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>

        <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-yellow-100" : "fixed left-[-100%]"}>
        <div className='mt-4 ml-4'>
          <Link to="/home" className='2xl:text-5xl xl:text-3xl lg:text-base text-4xl font-bold'> CASHIE <span className='text-gray-400'>R</span> </Link>
        </div>
          <ul className="uppercase p-4 ">
              <li><Link to="/service" className='block text-lg p-4 border-b border-gray-600'>POSサービス・機能</Link></li>
              <li><Link to="/cashless" className='block text-lg  p-4 border-b border-gray-600'>キャッシュレス対応</Link></li>
              <li><Link to="/custom" className='block  text-lg p-4 border-b border-gray-600'>カスタマイズ対応</Link></li>
              <li><Link to="/plan" className='block  text-lg p-4 border-b border-gray-600'>料金プラン</Link></li>
              <li><Link to="/simulation" className='block  text-lg p-4 border-b border-gray-600'>お見積りシュミレーション</Link></li>
              <li><Link to="/colum" className='block  text-lg p-4 border-b border-gray-600'>コラム</Link></li>
              <li><Link to="/news" className='block  text-lg p-4 border-b border-gray-600'>ニュース</Link></li>
              <li><Link to="/faq" className='block  text-lg p-4 border-b border-gray-600'>FAQ</Link></li>
            </ul>
        </div>

      </div>
    </div>
  )
}





export default Header