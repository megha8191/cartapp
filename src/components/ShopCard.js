import React, { useState ,useEffect} from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import cartSlice, { addtoCart ,removeCart} from '../utils/cartSlice';


const ShopCard = ({data}) => {
  const cartitems = useSelector((store)=>store.cart);
  const dispatch =  useDispatch();
  const [incart,setIncart] = useState(false);

  const removecart=(prod)=>{
    setIncart(false)
    dispatch(removeCart(prod))
  }
  useEffect(() => {
    const productInCart = cartitems.some(item => item.id === data.id);
    setIncart(productInCart);
  }, [cartitems, data.id]);

  const addcart =(prod)=>{
    setIncart(true);
    dispatch(addtoCart(prod));
  } 
  return (
    <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
    <div>
      <h1 className="truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left">
        {data.title}
      </h1>
    </div>
    <div>
      <h1 className=" w-40 text-gray-400 font-normal text-[10px] text-left">
       {(data.description).substring(0,60)}
      </h1>
    </div>
    <div className="h-[180px]">
      <img
        src={data.image}
        alt="Pierced Owl Rose Gold Plated Stainless Steel Double"
        className="h-full w-full object-contain"
      />
    </div>
    <div className="flex items-center justify-between w-full mt-5">
      <p className="text-green-600 font-semibold">$ {data.price}</p>
      {incart? (<button 
        onClick={()=>{removecart(data)}}
        className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide">
          Remove from cart
      </button>):(<button 
        onClick={()=>{addcart(data)}}
        className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide">
          Add to cart
      </button>)}
    </div>
  </div>
  )
}

export default ShopCard