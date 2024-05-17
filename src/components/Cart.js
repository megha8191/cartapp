import React from 'react'
import Header from './Headers'
import { useSelector } from 'react-redux'
import cartSlice from '../utils/cartSlice'
import Cartitem from './Cartitem'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartitems = useSelector((store)=>store.cart);
  return (
    <div>
      <Header />
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
        <div className="w-[100%] md:w-[60%] flex flex-col p-2">
          {(cartitems.length>0)?
        cartitems.map(function(cartitem){
           return <Cartitem key={cartitem.id} data={cartitem}/>
          })
        :<Link to="/" className='bg-black my-16 text-center inline-block mx-auto  text-white py-2 px-3 rounded-md'>Shop now</Link>}
        </div>
        <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
          <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
            <div className="flex flex-col gap-5 ">
              <div className="font-semibold text-xl text-green-800 ">YOUR CART</div>
              <div className="font-semibold text-5xl text-green-700  -mt-5">
                SUMMARY
              </div>
              <p className="text-xl">
                <span className="text-gray-700 font-semibold text-xl">
                  Total Items
                </span>
                : 2
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">
                {" "}
                <span className="text-gray-700 font-semibold">Total Amount</span> :
                $71.98
              </p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Cart