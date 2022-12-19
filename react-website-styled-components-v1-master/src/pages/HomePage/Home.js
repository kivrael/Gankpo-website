import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import { InfoSection, Pricing } from '../../components';
import HeroSection from '../../components/HeroSection';
// import Slideshow from '../../components/Slideshow'
import TextSection from '../../components/TextSection/TextSection';
import { Linebreak } from '../../globalStyles';
import Marquee from '../../components/Marquee';
import AboutSection from '../../components/AboutSection';
import LandingSection from '../../components/LandingSection';

function Home() {
  return (
    <>
      <Linebreak/>
      <LandingSection/>
      <AboutSection/>
      {/* <HeroSection/> */}
      <Linebreak/>
      {/* <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} /> */}
      <Marquee/>
      {/* <TextSection /> */}
      {/* <Slideshow/> */}
      {/* <InfoSection {...homeObjThree} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      <Pricing />
      {/* <InfoSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
