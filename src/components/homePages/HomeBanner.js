import React from 'react';
import { TypeAnimation as RawTypeAnimation } from 'react-type-animation';
const HomeBanner = () => {
  return (
    <div className='pt-1 bg-gradient-to-tr to-purple-100 from-cyan-100 '>

      <div className=' bg-gradient-to-tr to-purple-200 from-cyan-200 w-5/6 mx-auto rounded-lg shadow-2xl'>

      <span
        style={{ fontSize: '20px' }}
        className="w-full font-bold block bg-blue-400 bg-opacity-10 p-3 rounded-lg text-center "
      >
        <span>What is </span>{' '}
        <RawTypeAnimation
          sequence={[
            'm',
            1000,
            'Market',
            1000,
            'mMarket.com?',
            1000,
            
          ]}
          repeat={Infinity}
        />
      </span>


        {/* <h1 className="text-3xl pt-8 my-5 font-bold text-center  ">What is mMarket.com?</h1> */}
        <p className="text-center mt-5 dark:text-gray-900 ">mMarket.com is one of the world’s largest wholesale marketplaces, with 20 years of experience helping business-to-business <br /> (B2B) companies buy and sell their goods around the world.</p>

        <div className="carousel w-full h-80 pt-10">
          <div id="slide1" className="carousel-item relative w-full">
            <img src='https://raw.githubusercontent.com/salmatonka/mMarket.com-repo/main/src/assets/images/daniel-romero-q-RQba-XCgU-unsplash.jpg' alt='' className="w-full " />
            <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src='https://raw.githubusercontent.com/salmatonka/mMarket.com-repo/main/src/assets/images/arnel-hasanovic-4oWSXdeAS2g-unsplash.jpg' alt='' className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src='https://raw.githubusercontent.com/salmatonka/mMarket.com-repo/main/src/assets/images/lacie-slezak-eJsh9LKnX_A-unsplash.jpg' alt='' className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src='https://raw.githubusercontent.com/salmatonka/mMarket.com-repo/main/src/assets/images/lacie-slezak-eJsh9LKnX_A-unsplash.jpg' alt='' className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>

      </div>



    </div>
  );
};


export default HomeBanner;