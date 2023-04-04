import styled from "styled-components";

export const BookingContainer = styled.div`
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
  padding: 5px 30px 16px 84px;
  border-radius: 10px;
`

export const TopLine = styled.div`
  color: #FFAB00;
  font-size: 25px;
  line-height: 36px;
  font-weight: 500;
  letter-spacing: 1.4px;
  margin-top: 5px;
  margin-bottom: -10px;
  padding-left: 45px;
  margin-left: -80px;
`;


export const Toggle = styled.h1`
  display: flex;
  justify-content: space-between;
  margin-bottom: -15px;
  margin-top: 20px;
  padding-top: 20px;
`

export const Option = styled.div`
  color: ${props => props.state ? '#000' : '#FFAB00' };
  background-color: ${props => props.state ? '#FFAB00' : '#111' };
  margin: 0px 30px;
  padding: 10px;
  border-radius: 10px;

  font-size: 25px;
  line-height: 1.1;
  font-weight: 300;

  :hover{
    background-color: #FFAB00;
    color: #fff;
  }

`;

export const Subtitle = styled.p`
  max-width: 840px;
  margin-top: 24px;
  font-size: 18px;
  line-height: 24px;
  color: #C0C0C0;//#a9b3c1;
`;

export const Section = styled.p`
    color: #fff;
    margin-left: -50px;
    padding: 15px 0;
`

export const Input = styled.input`
	padding: 0.5em;
	color: #FFAB00;
	background: #000;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin: 0.5em 0;
`
export const Button = styled.button`
  background: #000;
  color: #FFAB00;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #FFAB00;
  border-radius: 3px;

  :hover{
    background: #FFAB00;
    color: #000
  }

  :active {
    box-shadow: 2px 2px 5px #fc894d;
    }
`;

export const ImgWrapper = styled.div`
  background-color: #000;
  display: flex;
  /* width: 100%; */
  /* display: center; */
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: -80px;
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