import React from 'react'
import { Linebreak } from '../../globalStyles'
import { AboutContainer, BackgroundContainer, Heading, Subtitle, TopLine, Img, ImgWrapper } from './AboutElements'

const AboutSection = () => {
  return (
    <>
    <AboutContainer>
      <BackgroundContainer>
      <TopLine>QUI SOMMES-NOUS ?</TopLine>
      <Subtitle>GANKPO est un label de musique  basé à Paris ayant pour but de promouvoir, diffuser et transmettre la musique sous toutes ses formes, à travers l’organisation d’évènements, la production d’album, la création d’ateliers et de masters class.

      </Subtitle>
      <Subtitle>
      L’association a été créée en 2015 par le groupe d'Afrobeat “Monkuti” afin d’assurer la gestion d’un lieu de création artistique situé à Ivry sur Seine.
      </Subtitle>
      <Subtitle>
      Depuis, GANKPO a multiplié les évènements en région parisienne, mais aussi au Portugal, en Allemagne et en Afrique.
      </Subtitle>
      {/* <Subtitle>
      L’Afrobeat c’est l’ADN de GANKPO.
      </Subtitle> */}
      <br/>
      <TopLine>NOTRE VISION</TopLine>
      <Heading>La musique n’a pas de frontières :</Heading>
      <Subtitle>La musique est un excellent moyen de repousser ses propres limites, de développer ses capacités, aussi bien au niveau physique qu’au niveau mental, intellectuel ou spirituel.
      </Subtitle>
      <Heading>La Musique n’a pas d’âge : </Heading>
      <Subtitle>
      Que l’on soit bébé, enfant, adolescent, adulte ou retraité, la musique nous touche. Elle est un excellent moyen de rassembler les plus jeunes comme les plus vieux et de recréer du lien intergénérationnel.
      </Subtitle>
      <Heading>La musique est universelle :</Heading>
      <Subtitle>
      Elle est un langage universel qui permet de communiquer n’importe où dans le monde.
      </Subtitle>
      <Heading>La musique doit vivre au niveau local.</Heading>
      <Subtitle>
      Evidemment, la plupart des artistes cherchent à parcourir le monde et jouer sur des scènes magnifiques.Mais nous pensons que la musique commence près de chez nous. Des budgets pharaoniques sont débloqués pour des tournées à l’autre bout du monde, alors que localement il est difficile de rémunérer convenablement ne serait ce qu’un seul musicien pour une prestation d’1h dans le centre de Paris.
      </Subtitle>
      <Subtitle>
      D’un côté, trop de jeunes musiciennes et musiciens talentueux n’ont pas le réseau nécessaire pour pouvoir se représenter facilement, d’autant plus que la concurrence est rude.
      </Subtitle>
      <Subtitle>
      De l’autre côté, beaucoup de petites salles, bars, clubs, restaurants ou autres lieux pouvant organiser des évènements ne savent pas toujours à qui s’adresser pour trouver des musiciens qualifiés pour leur assurer une bonne soirée.
      </Subtitle>
      <Subtitle>
      Le résultat : beaucoup de talents gaché et de lieux inexploités ou mal exploités.
      </Subtitle>
      <Subtitle>
      Nous sommes persuadés que la Musique et l’Art en général sont essentiels au bon fonctionnement d’une société, c’est pourquoi nous souhaitons favoriser et valoriser les collaborations entre les Artistes et les différents types de Lieux Culturels.
      </Subtitle>
      <br/>
      <TopLine>GANKPO AFROBEAT SESSION</TopLine>
      <Heading>
      L’Afrobeat c’est l’ADN de GANKPO
      </Heading>
      <Subtitle>
      Depuis juin 2021, le label a développé un concept de soirée autour de l'afrobeat. Des soirées réunissant plusieurs musiciennes et musiciens de la scène parisienne qui se réunissent pour repousser les limites de l'afrobeat en mélangeant le style avec d'autres genres musicaux (jazz, pop, folk, classique). Chaque mois c'est un nouvel invité qui est mis à l'honneur. 
      </Subtitle>
      <Heading>Note sur l'afrobeat :</Heading>

      <Subtitle>
      L'afrobeat est un genre musical issu de mélange de musique traditionnelle nigériane, de jazz, de highlife, de funk, et de chant accompagné de percussions et de styles vocaux, popularisé en Afrique dans les années 1970. 
      </Subtitle>
      <Subtitle>
      Le genre est créé par le multi-instrumentiste nigérian et leader Fela Kuti, qui lui en attribue le nom.
      </Subtitle>
      <Subtitle>
      C'est Kuti qui utilise pour la première fois le terme d'« afrobeat » à son retour d'une tournée américaine avec son groupe Nigeria '70 (anciennement Koola Lobitos).
      </Subtitle>
    </BackgroundContainer>
    </AboutContainer>
    <ImgWrapper>
      <Img src={require('../../images/logo_gankpo_1.png')} alt={'logo'} />
    </ImgWrapper>

    </>
  )
}

export default AboutSection