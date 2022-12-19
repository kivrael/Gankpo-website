import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  font-family: 'Encode Sans Expanded';
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
//(Container)
  font-family: 'Encode Sans Expanded';
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
`;

export const NavLogo = styled(Link)`
  font-family: 'Encode Sans Expanded';
  color: #ffc000;
  /* ffc000 */
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;


export const Logo = styled.img`
  padding-left: 50px;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 50px;
  @media screen and (max-width: 960px) {
    padding-left: 30px;
  }
`;

// export const NavIcon = styled(FaMagento)`
//   margin-right: 0.5rem;
// `;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  padding-right: 50px;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: flex-start;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  font-family: 'Encode Sans Expanded';
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #FFAB00;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #ffd500;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
      color: #252C7B;

      /* 4b59f7 */
      /* 01522 */
      transition: all 0.3s ease;
    }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;

      /* 4b59f7 */
      /* 01522 */
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
