import React from 'react';
import TypeWriter from '../../homePages/TypeWriter';
import HomeBanner from '../../homePages/HomeBanner';
import Reviews from '../../homePages/Reviews';
import SourcingPage from '../../homePages/SourcingPage';

import ChooseOption from '../../homePages/ChooseOption';
import MobilePrice from '../../homePages/MobilePrice';
import About from '../About/About';
import HeadLine from '../../homePages/HeadLine';
import OfferPhones from '../OfferPhones/OfferPhones';
import Products from '../Products/Products';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            {/* <TypeWriter /> */}
            <HeadLine />
            <HomeBanner />
            <Items />
            {/* <Products/> */}
            {/* <OfferPhones /> */}
            <SourcingPage />
            <About />
            <Reviews />
            <MobilePrice />
            <ChooseOption />
           
        </div>
    );
};

export default Home;