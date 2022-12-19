import React from 'react';
import { InfoSection } from '../../components';
import ContactSection from '../../components/ContactSection';
import { homeObjOne, homeObjTwo } from './Data';

function Contact() {
  return (
    <>
    <ContactSection/>
      {/* <InfoSection {...homeObjOne} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
    </>
  );
}

export default Contact;
