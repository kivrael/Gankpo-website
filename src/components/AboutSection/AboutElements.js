import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #000;//696969;
  /* color: #fff; */
  padding-top: 50px;
  //16px;
  padding-left: 15%;
  padding-right: 10%;
  display: flex;
  justify-content: center;
`

export const BackgroundContainer = styled.div`
  max-width: 840px;
  background-color: #202020;
  padding: 16px;
  border-radius: 10px;

`

export const TopLine = styled.div`
  /* background-color: #696969; */
  color: #FFAB00;
  font-size: 25px;
  line-height: 36px;
  font-weight: 500;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  padding-left: 45px;
`;

export const Heading = styled.h1`
  color: #fff;
  margin-bottom: 0px;
  font-size: 25px;
  line-height: 1.1;
  font-weight: 300;
  padding-top: 20px;
`;

export const Subtitle = styled.p`
  max-width: 840px;
  margin-top: 24px;
  font-size: 18px;
  line-height: 24px;
  color: #C0C0C0;//#a9b3c1;
`;

export const ImgWrapper = styled.div`
  background-color: #000;
  display: flex;
  /* width: 100%; */
  /* display: center; */
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Img = styled.img`
  /* padding-right: 0; */
  /* border: 0; */
  max-width: 100%;
  vertical-align: middle;
  /* justify-items: center; */
  /* display: inline-block; */
  max-height: 500px;
`;