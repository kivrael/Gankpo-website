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

// require("./.pdf")

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const sections = ["Infos du jour", "Dates/Événements à venir", "Promotions"]
const photos = ['./Printemps1.jpg', './Printemps2.jpg', './Expo.jpg']
require('./Printemps1.jpg')



const delay = 5000;

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
    {/* <LandingTitle></LandingTitle> */}
    {/* <img src={require('./Printemps1.jpg')} alt={photos[0]}/> */}
    <SlideShow>
        <SlideShowSlider style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}>
            <img style={{maxWidth: '100%'}} src={require('./Printemps1.jpg')} alt={photos[0]}/>
            <img style={{maxWidth: '100%'}} src={require('./Printemps2.jpg')} alt={photos[0]}/>
            <img style={{maxWidth: '100%'}} src={require('./Expo.jpg')} alt={photos[0]}/>

            {photos.map((source, index) => (
              <>
              {/* {require(source)} */}
              <Slide key={index}><SlideTitle>{photos[index]}</SlideTitle>  
              {/* {require(source)}               */}
              <img style={{maxWidth: '100%'}}
              src='./Printemps1.jpg' alt={index}/>
                </Slide>
              </>
                
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