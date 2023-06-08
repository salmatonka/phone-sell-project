import React from 'react';
import './Products.css'
import ProductItems from '../ProductItems/ProductItems';
import ProductCart from '../ProductCart/ProductCart';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
   //  const productsData = useLoaderData();
   return (
      <div className='bg-gradient-to-tr to-purple-100 from-cyan-100'>
         <div className=' bg-gradient-to-tr to-purple-200 from-cyan-200 w-5/6 mx-auto shadow-2xl'>

         
         <h1 className="text-3xl pt-14 mb-5 font-bold text-center  ">Products</h1>
         <div className='side-container'>
            {/* left side  */}
            <div className='left-side '>

               <div className='border px-4'>
                  <h2>hhh</h2>
               </div>




               {/* <ProductItems /> */}

            </div>
            <div className='right-side grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 bg-gradient-to-tr to-purple-100 from-cyan-100 rounded-lg shadow-2xl' >
               {/* right side  */}
               {/* <ProductCart /> */}
               {/* {
                  productsData.map(product=><ProductCart
                   key={product.id}
                   product={product}
                  ></ProductCart>)
               } */}
               hh
            </div>
         </div>
         </div>
      </div>
   );
};

export default Products;