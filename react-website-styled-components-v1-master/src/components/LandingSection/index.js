import React from 'react'
import {
    SlideShow,
    SlideShowSlider,
    Slide,
    SlideShowDots,
    SlideShowDot,
    LandingContainer,
    LandingTitle,
    SlideTitle
} from './LandingElements';

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const sections = ["Infos du jour", "Dates/Événements à venir", "Promotions"]
const delay = 2500;

const LandingSection = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <LandingContainer>
    <LandingTitle>Bandeau d'Accueil</LandingTitle>
    <SlideShow>
        <SlideShowSlider style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}>
            {sections.map((text, index) => (
                <Slide key={index}><SlideTitle>{text}</SlideTitle></Slide>
            ))}
        </SlideShowSlider>
    </SlideShow>

    <SlideShowDots>
      {colors.map((_,idx) => (
        <SlideShowDot
        key={idx}
        active={idx == index}
        onClick={()=>{
          setIndex(idx);
        }}
        />
      ))}
    </SlideShowDots>
    </LandingContainer>
  );
}

export default LandingSection