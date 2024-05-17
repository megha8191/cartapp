import React, { useEffect, useState } from 'react'
import Header from './Headers'
import ShopCard from './ShopCard';

const Home = () => {
    const api_url = "https://fakestoreapi.com/products";
    const [products , setProducts] = useState([]);
    const [load,setLoad] = useState(false);

    const fetchProducts = async()=>{
        setLoad(true)
        const data = await fetch(api_url);
        const result = await data.json();
        setProducts(result);
        setLoad(false)
    }

    useEffect(()=>{
        fetchProducts();
    },[])

  return (load? "loading...":
    <div>
        <Header/>
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
          {products.map(function(product){
            return <ShopCard data={product} key={product.id}/>
          })}
        </div>
    </div>
  )
}

export default Home