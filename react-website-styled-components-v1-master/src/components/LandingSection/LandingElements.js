import styled from "styled-components";


export const LandingContainer = styled.div`
  background-color: #000;
  color: #fff;
`

export const LandingTitle = styled.h1`
  text-align: center;
`

export const SlideShow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 500px;
`

export const SlideShowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
` 

export const Slide = styled.div`
  display: inline-block;

  height: 100px;
  width: 100%;
  border-radius: 40px;
`

export const SlideTitle = styled.div`
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 20px;
`

export const SlideShowDots = styled.div`
  text-align: center;
`

export const SlideShowDot = styled.div`
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: ${({ active }) => (active ? '#ffc000' : '#c4c4c4' )};
`