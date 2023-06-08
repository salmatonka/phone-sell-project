import React from 'react';
import './OfferPhones.css';
const OfferPhones = () => {
    return (
        <div className='pt-8 bg-gradient-to-tr to-purple-100 from-cyan-100'>
            <div className=" text-center text-purple-300 lg:px-10 md:px-6 sm:px-4 px-2 lg:text-3xl md:text-xl text-lg font-bold tracking-tight">
                <h1>Shop all latest offers </h1>
            </div>
            <div className="flex items-center justify-center pb-4 ">
                <h1 className="h-[1px] xl:w-[500px] lg:w-[320px] md:w-[220px] sm:w-[120px] w-[80px] bg-gray-400"></h1>
                <h2 className="lg:px-10 md:px-6 sm:px-4 px-2 lg:text-3xl md:text-xl text-lg text-gray-600 font-bold tracking-tight">
                    and innovations{" "}
                </h2>
                <h1 className="h-[1px] xl:w-[500px] lg:w-[320px] md:w-[220px] sm:w-[120px] w-[80px] bg-gray-400"></h1>

            </div>


            <div className="offer-container">
                <div className="">01</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                
            </div>
        </div>
    );
};

export default OfferPhones;