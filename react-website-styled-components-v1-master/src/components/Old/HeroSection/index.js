import React, {useState} from 'react'
import Video from '../../videos/Monkuti-Ophélia-FB.mov'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
// import { Button } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id='home'>       
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mov' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Gankpo Afrobeat Session</HeroH1>
            <HeroP>
                Tout a commencé en juin 2021
            </HeroP>
            <HeroP>
            L’Afrobeat c’est l’ADN de GANKPO.
            </HeroP>
            <HeroP>
            Le collectif a été crée par le groupe d’afrobeat Monkuti. La musique de Fela Kuti.
            </HeroP>
            {/* <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true"
                >
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper> */}
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection