import React from 'react'
import { TextSectionContainer } from './TextSectionElements'
import { Heading, Topline, FlexParagraph } from './TextSectionElements'

const TextSection = () => {
  return (
    <>
    <TextSectionContainer>
        <Topline>QUI SOMMES-NOUS?</Topline>
        <Heading>Gankpo est un collectif de musiciens basé à Paris.</Heading>
        <div>
        <p>Gankpo souhaite promouvoir et diffuser la musique sous toutes ses formes, à travers l’organisation d’évènements, la production d’album, la création d’ateliers et de masters class.</p>
        </div>

        <Heading>Gankpo a pour but de faire vivre la musique au niveau local.</Heading>
        <div>
        <FlexParagraph>L’association a été créée en 2015 par le groupe d'afrobeat “Monkuti” afin d’assurer la gestion d’un lieu de création artistique situé à Ivry sur Seine.</FlexParagraph>
        <FlexParagraph>Depuis, le collectif a multiplié les évènements en région parisienne, mais aussi au Portugal, en Allemagne et au Bénin.</FlexParagraph>
        </div>
    </TextSectionContainer>
    <TextSectionContainer>
        <Topline>QUI SOMMES-NOUS?</Topline>
        <Heading>Gankpo est un collectif de musiciens basé à Paris.</Heading>
        <div>
        <p>Gankpo souhaite promouvoir et diffuser la musique sous toutes ses formes, à travers l’organisation d’évènements, la production d’album, la création d’ateliers et de masters class.</p>
        </div>

        <Heading>Gankpo a pour but de faire vivre la musique au niveau local.</Heading>
        <div>
        <FlexParagraph>L’association a été créée en 2015 par le groupe d'afrobeat “Monkuti” afin d’assurer la gestion d’un lieu de création artistique situé à Ivry sur Seine.</FlexParagraph>
        <FlexParagraph>Depuis, le collectif a multiplié les évènements en région parisienne, mais aussi au Portugal, en Allemagne et au Bénin.</FlexParagraph>
        </div>
    </TextSectionContainer>
    </>
  )
}

export default TextSection