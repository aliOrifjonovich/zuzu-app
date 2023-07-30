import React from 'react';
import Banner from '../components/Main/Banner/Banner';
import Categories from '../components/Main/Categories/Categories';
import Products from '../components/Main/Products/Products';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <Products/>
        </div>
    );
}

export default Home;
