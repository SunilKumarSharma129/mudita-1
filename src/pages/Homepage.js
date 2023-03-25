import React from 'react'
import Banner from '../components/homepage/Banner';
import Roadmap from '../components/homepage/Roadmap';
import Navbar from '../components/shared/Navbar';

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Roadmap />
    </div>
  )
}

export default Homepage;
