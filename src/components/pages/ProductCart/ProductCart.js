import React from 'react';

const ProductCart = () => {
    // const {name, img,details} = product;
    // console.log(product)
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className=''>
          <div className='bg-gradient-to-tr to-purple-300 from-cyan-300 rounded-lg shadow-2xl p-3'>
            <div className="relative overflow-hidden transition duration-300 transform lg:hover:-translate-y-2 hover:shadow-2xl ">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src=''
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                 name
                </p>
                
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                 details
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <button className='bg-gradient-to-tr to-purple-200 from-cyan-200 w-40 h-10 rounded-lg shadow-2xl my-4 '>details</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
 );
};

export default ProductCart;