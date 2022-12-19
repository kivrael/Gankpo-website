import React from 'react';
import { InfoSection, Pricing } from '../../components';
import BookingSection from '../../components/BookingSection';
import { homeObjOne, homeObjThree } from './Data';

function Booking() {
  return (
    <>
      <BookingSection />
      {/* <InfoSection {...homeObjOne} /> */}
      {/* <InfoSection {...homeObjThree} /> */}
    </>
  );
}

export default Booking;
