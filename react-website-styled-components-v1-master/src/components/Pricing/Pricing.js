import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { IoIosPeople, IoIosPerson, IoIosRibbon } from "react-icons/io"
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Transmission</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoIosPerson />
                </PricingCardIcon>
                <PricingCardPlan>Cours individuels</PricingCardPlan>
                <PricingCardCost>50€</PricingCardCost>
                <PricingCardLength>la séance</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Cours de</PricingCardFeature>
                  <PricingCardFeature>musique et</PricingCardFeature>
                  <PricingCardFeature>de chant</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Nous contacter</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoIosPeople />
                </PricingCardIcon>
                <PricingCardPlan>Ateliers</PricingCardPlan>
                <PricingCardCost>300€</PricingCardCost>
                <PricingCardLength>la demi-journée</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Session en groupe</PricingCardFeature>
                  <PricingCardFeature>pour les entreprises,</PricingCardFeature>
                  <PricingCardFeature>associations, écoles, etc.</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Nous contacter</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard > 
              {/* to='/sign-up' */}
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoIosRibbon />
                </PricingCardIcon>
                <PricingCardPlan>Master Class</PricingCardPlan>
                <PricingCardCost>à définir</PricingCardCost>
                 <PricingCardLength>à l'avance</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Session avec musicien</PricingCardFeature>
                  <PricingCardFeature>partenaire référent par</PricingCardFeature>
                  <PricingCardFeature>style de musique.</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Nous contacter</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
