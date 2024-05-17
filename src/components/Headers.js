import React from 'react'
import { NavLink } from 'react-router-dom' 
import { useSelector } from 'react-redux'
import store from '../utils/shop'

const Header = () => {
  const cartitems = useSelector((store)=>store.cart);
  return (
    <header className='bg-gray-100 border-b-slate-900 py-4'>
        <div className='container max-md mx-auto'>
          <div className='flex justify-between items-center'>
            <img src='https://codehelp-shopping-cart.netlify.app/logo.png' alt='logo' className='max-w-48 w-full'></img>
            <div>
                <NavLink to="/" className="mr-5">
                    Home
                </NavLink>
                <NavLink to="/cart">
                    Cart <span className='bg-red-300 rounded-full p-2 w-8 inline-block h-8 text-center'>{cartitems.length}</span>
                </NavLink>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header