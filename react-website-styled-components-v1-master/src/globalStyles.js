import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family:  'Sagonabook';//'Encode Sans Expanded';//'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
// 101522
export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#202020' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #ffd500;
  font-size: ${({ fontBig }) => (fontBig ? '30px' : '18px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    color: #101522;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#ffc000' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Linebreak = styled.div`
  background-color: #000;
  height: 40px;
`

export default GlobalStyle;
