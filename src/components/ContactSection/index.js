import React from 'react'
import AboutSection from '../AboutSection'
import { ContactContainer, BackgroundContainer, Heading, Subtitle, TopLine, Img, ImgWrapper } from './ContactElements'


const ContactSection = () => {
  return (
    <>
    <ContactContainer>
        <BackgroundContainer>
            <TopLine>Contact</TopLine>

            <Subtitle>
                <ul>
                    <li>Booking (relations artistes/relations lieux culturels) : </li>
                    <li>Admin : </li>
                    <li>Direction artistique : Mario Orsinet</li>
                </ul>
            </Subtitle>
            <Heading>LE TERRITOIR</Heading>
            <Subtitle>Région parisienne : Paris et sa banlieue.</Subtitle>
        </BackgroundContainer>
    </ContactContainer>
    <ImgWrapper>
      <Img src={require('../../images/logo_gankpo_1.png')} alt={'logo'} />
    </ImgWrapper>
    </>
  )
}

export default ContactSection


// Booking (relations artistes/relations lieux culturels) : 
// Admin : 
// Direction artistique : Mario Orsinet


// LE TERRITOIR
// Région parisienne : Paris et sa banlieue.
