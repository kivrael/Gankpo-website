import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  Logo
} from './Footer.elements';
import LogoImg from '../../images/logo_gankpo_seul.png';


function Footer() {
  return (
    <FooterContainer>
      {/* <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription> */}
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Qui Sommes-nous ?</FooterLinkTitle>
            <FooterLinkTitle>Notre Vision</FooterLinkTitle>
            <FooterLinkTitle>Gankpo Afrobeat Session</FooterLinkTitle>
            {/* <FooterLink to='/'>Photos</FooterLink>
            <FooterLink to='/'>Vidéos</FooterLink> */}
            {/* <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink> */}
          </FooterLinkItems>
          <FooterLinkItems>
          <FooterLinkTitle>Photos</FooterLinkTitle>
            <FooterLinkTitle>Vidéos</FooterLinkTitle>
            <FooterLinkTitle>Transmission</FooterLinkTitle>
            <FooterLink to='/'>Cours individuels</FooterLink>
            <FooterLink to='/'>Ateliers</FooterLink>
            <FooterLink to='/'>Master Class</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
          <FooterLinkTitle>Location</FooterLinkTitle>
            <FooterLinkTitle>Bibliothèque</FooterLinkTitle>
            {/* <FooterLink to='/'>Articles</FooterLink>
            <FooterLink to='/'>Documentaires</FooterLink>
            <FooterLink to='/'>Archives</FooterLink>
            <FooterLink to='/'>Partitions</FooterLink> */}
            <FooterLinkTitle>Contact</FooterLinkTitle>
            <FooterLinkTitle>Booking</FooterLinkTitle>
            <FooterLink to='/'>Catalogue Artistes</FooterLink>
            <FooterLink to='/'>Catalogue Lieux Culturels</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Boutique</FooterLinkTitle>
            <FooterLinkTitle>Tarification</FooterLinkTitle>
            <FooterLinkTitle>Réseaux Sociaux</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <Logo src={LogoImg} alt={'Gankpo'}/>
            {/* <SocialIcon /> */}
            {/* GANKPO */}
          </SocialLogo>
          <WebsiteRights>GANKPO © {new Date().getFullYear()} Tous droits réservés</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href='/'
              // {
              //   '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              // }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
