import React from 'react';
import Banner from './Banner';
import Best from './Best';
import SafeForKids from './SafeForKids';
import Contact from './Contact';
import HomeService from './HomeService';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <SafeForKids></SafeForKids>
           <HomeService></HomeService>
           <Best></Best>
           <Contact></Contact>
        </div>
    );
};

export default Home;