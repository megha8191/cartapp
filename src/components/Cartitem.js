import React from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import cartSlice, { addtoCart ,removeCart} from '../utils/cartSlice';

const Cartitem = ({data}) => {
    const dispatch = useDispatch()
    const cartitems = useSelector((store)=>store.cart);
    const removecart=(prod)=>{
        dispatch(removeCart(prod))
      }
  return (
<div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img
            src={data.image}
            className="object-cover "
            alt=""
          />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">
            {data.title}
          </h1>
          <h1 className="text-base text-slate-700 font-medium">
          {(data.description).substring(0,60)}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">{data.price}</p>
            <div className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
              <svg onClick={()=>{removecart(data)}}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="text-red-800 group-hover:text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem