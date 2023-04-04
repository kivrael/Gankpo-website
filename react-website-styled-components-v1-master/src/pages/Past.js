import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AboutContainer, BackgroundContainer, Heading, Subtitle, TopLine, Img, ImgWrapper } from '../components/AboutSection/AboutElements'
import { Toggle, Option } from '../components/BookingSection/BookingElements';

const Past = (props) => {
  // const location = useLocation();
  // const data = location.state;
  // console.log(data);
  console.log(props.location.state);
  console.log(props.location)
  
  const [toggle,setToggle] = useState(props.location.state)

  useEffect(() => {

  })

  const showPast = () => {
      setToggle(1)
  }

  const showFuture = () => {
      setToggle(0)
  }

  // setToggle(data)
  console.log(toggle)
  return (
    <AboutContainer>
      <BackgroundContainer>
      <TopLine>Agenda</TopLine>

      <Toggle>
          <Option state={toggle} onClick={showPast}>Événements passés</Option>
          <Option state={1-toggle} onClick={showFuture}>Événements à venir</Option>    
      </Toggle>
      <br/>
      
        
      {/* <TopLine>Événements passés</TopLine> */}
      {/* {toggle ?
         */}

         {toggle ? <>
      <Heading>2022</Heading>
      <Subtitle>
      15/07 : GANKPO Music Invite KIALA NZAVOTUNGA, Le Sample
      {/* 24/06 : Gankpo Afrobeat Session invite Afrik Satie, La Petite Halle
      24/06 : Gankpo Afrobeat Session invite Afrik Satie, La Petite Halle
      24/06 : Gankpo Afrobeat Session invite Afrik Satie, La Petite Halle
      24/06 : Gankpo Afrobeat Session invite Afrik Satie, La Petite Halle */}

      </Subtitle>
      <Subtitle>
      24/06 : Gankpo Afrobeat Session invite Afrik Satie, La Petite Halle
      </Subtitle>
      <Subtitle>
      17/06 : GANKPO AFROBEAT SESSION, L'Alimentation Générale
      </Subtitle>
      <Subtitle>
      01/05 : Gankpo Afrobeat Session invite Chief Udoh Essiet, La Petite Halle
      </Subtitle>
      <Subtitle>
      29/04 : CONCERT - GANKPO AFROBEAT SESSION, Le Sample
      </Subtitle>
      <Subtitle>
      10/04 : Gankpo Afrobeat Session Invite Luna Silva, La Petite Halle
      </Subtitle>
      <Subtitle>
      09/04 : Gankpo Hommage à Kologbo + Lola Ondi Kwa, La Flèche d'or
      </Subtitle>
      <Subtitle>
      25/03 : Gankpo Afrobeat Session, Le Sample
      </Subtitle>
      <Subtitle>
      19/03 : Gankpo Afrobeat Session Invite INDY DIBONGUE, La Gare Expérimentale
      </Subtitle>
      <Subtitle>
      06/03 : Gankpo Afrobeat Session Invite KIALA NZAVOTUNGA, La Petite Halle
      </Subtitle>
      <Subtitle>
      04/03 : Gankpo Afrobeat Session Invite PAPESSE JEANNE, La Miroiterie
      </Subtitle>
      <Subtitle>
      25/02 : Gankpo Afrobeat Session Invite CHIEF UDOH ESSIET, Le Sample
      </Subtitle>
      <Subtitle>
      19/02 : Gankpo Afrobeat Session Invite MADONE, La Gare Expérimentale 
      </Subtitle>
      <Subtitle>
      06/02 : Gankpo Afrobeat Session Invite TEMPO TEMPO!, La Petite Halle
      </Subtitle>
      <Subtitle>
      28/01 : Gankpo Abrobeat Session Invite le PAC, Le Sample
      </Subtitle>
      <Subtitle>
      09/01 : Gankpo Afrobeat Session Invite Nicolas Giraud, La Petite Halle
      </Subtitle>
      <Heading>2021</Heading>
      <Subtitle>
      17/12 : Gankpo Afrobeat Session Invite MONKUTI, Le Sample
      </Subtitle>
      <Subtitle>
      26/11 : Gankpo Afrobeat Session Invite Raùl Monsalve, Le Sample
      </Subtitle>
      <Subtitle>
      12/11 : Gankpo Afrobeat Session invite Mary May, L'Alimentation Générale
      </Subtitle>
      <Subtitle>
      22/10 : Gankpo Afrobeat Session Invite LES FRÈRES SMITH, La Gare Expérimentale
      </Subtitle>
      <Subtitle>
      24/09 : Gankpo Afrobeat Session Feat Oghene Kologbo, La Gare Expérimentale
      </Subtitle>
      <Subtitle>
      17/09 : GanKpo AfroBeat Session Invite Oghene Kologbo, Le Sample
      </Subtitle>
      <Subtitle>
      27/08 : GanKpo AfroBeat Session Invite KIALA NZAVOTUNGA, Le Sample
      </Subtitle>
      <Subtitle>
      30/07 : Gankpo Afrobeat Session Invite CHIEF UDOH ESSIET, Le Sample
      </Subtitle>
      <Subtitle>
      25/06 : GanKpO AfroBeat Session, Le Sample
      </Subtitle>
      <Subtitle>
      04/06 : Gankpo Afro Jam, Café Chez Pierre
      </Subtitle>
      <Subtitle>
      03/06 : Gankpo Afro Jam, Café Chez Pierre
      </Subtitle>
      <Subtitle>
      28/05 : Gankpo Afro Jam + Concert, Café Chez Pierre
      </Subtitle>
      <Subtitle>
      27/05 : Gankpo Afro Jam + Concert
      </Subtitle>
      </> : 
      <>
      <Heading>2023</Heading>
      <Subtitle>
      04/02 : Kiala & Mario, L'Alimentation Générale
      </Subtitle>
      <Subtitle>
      10/02 : Kiala & Mario
      </Subtitle>
      </>
      }
      </BackgroundContainer>
    </AboutContainer>
  )
}

export default Past