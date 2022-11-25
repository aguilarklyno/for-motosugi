import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"

const Header = () => {
  return (
    <div className='flex justify-around items-center w-full bg-yellow-200 text-black h-24 fixed z-10'>
      <div>
        <Link to="/home" className='text-5xl font-bold'> CASHIE <span className='text-gray-400'>R</span> </Link>
      </div>

      <nav>
        <Sul className='inline-flex'>
          <li>
            <Link to="/service" className=' 2xl:text-base lg:text-xs'>POSサービス・機能</Link>
          </li>
          <li>
            <Link to="/cashless" className='2xl:text-base lg:text-xs '>キャッシュレス対応</Link>
          </li>
          <li>
            <Link to="/custom" className='2xl:text-base lg:text-xs '>カスタマイズ対応</Link>
          </li>
          <li>
            <Link to="/plan" className='2xl:text-base lg:text-xs '>料金プラン</Link>
          </li>
          <li>
            <Link to="/simulation" className='lg:text-xs 2xl:text-base '>お見積りシュミレーション</Link>
          </li>
          <li>
            <Link to="/colum" className='lg:text-xs 2xl:text-base '>コラム</Link>
          </li>
          <li>
            <Link to="/news" className='lg:text-xs 2xl:text-base '>ニュース</Link>
          </li>
          <li>
            <Link to="/faq" className='lg:text-xs 2xl:text-base '>FAQ</Link>
          </li>
        </Sul>
      </nav>
    </div>
  )
}
{/* ---------------繰り返しになるliタグの部分だけStyled componentsを適用------------------- */}

      const Sul = styled.ul`
      & li {
        margin-right: 20px;
      }
      & a {
        font-weight: calc(16 + 16 * (100vw - ));
      }
      `;

export default Header