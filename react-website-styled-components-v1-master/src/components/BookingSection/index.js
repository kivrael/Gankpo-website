import React from 'react'
import { useState } from 'react'
import { BookingContainer, BackgroundContainer, Heading, Subtitle, TopLine, Img, ImgWrapper, Section, Input, Button, Option } from './BookingElements'



const BookingSection = () => {

    const [toggle,setToggle] = useState(0)

    const showArtist = () => {
        setToggle(1)
    }

    const showVenue = () => {
        setToggle(0)
    }

  return (
    <>
    <BookingContainer>
        <BackgroundContainer>
            <TopLine>Booking</TopLine>
            <Heading>
                <Option state={toggle} onClick={showArtist}>Catalogue Artistes</Option>
                <Option state={1-toggle} onClick={showVenue}>Catalogue Lieux Culturels</Option>    
            </Heading>

            <Subtitle>
                <Section>Formulaire :</Section>
                {toggle ? 
                <ul>
                    <li>Nom du Groupe/Artiste :<Input/></li>
                    <li>Style musical :<Input/></li>
                    <li>Nombre de musiciens :<Input/></li>
                    <li>Biographie :<Input/></li>
                    <li>Durée du show :<Input/></li>
                    <li>Prix :<Input/></li>
                </ul> :
                <ul>
                    <li>Nom du Lieu :<Input/></li>
                    <li>Type de lieu (Salle/Bar/Club/Restaurant/Autre) :<Input/></li>
                    <li>Adresse du lieu :<Input/></li>
                    <li>Capacité d'accueil public :<Input/></li>
                    <li>Nombre de places assises :<Input/></li>
                    <li>Capacité d'accueil artistes :<Input/></li>
                    <li>Taille de l’espace scénique :<Input/></li>
                    <li>Restauration : OUI / NON<Input/></li>

                </ul>
                }
                <Section>Pièces à fournir :</Section> 
                { toggle ? 
                    <ul>
                        <li>Fiche Technique <Input type='file'/></li>
                        <li>Photo <Input type='file' accept="image/png, image/jpeg"/></li>
                        <li>Vidéo <Input type='file'/></li>
                        <li>Liens audio (spotify, itunes, etc)<Input/></li>
                    </ul> :
                    <ul>
                        <li>Fiche Technique <Input type='file'/></li>
                        <li>Photos <Input type='file' accept="image/png, image/jpeg"/></li>
                    </ul> }
                </Subtitle>
                <Button>Envoyer</Button>
                <Subtitle>Catering à la charge du Lieu.<br/><br/>
                Le Lieu devra s’assurer d’avoir payé la cotisation annuelle de la Sacem.<br/>
                GANKPO s’engage à rémunérer les artistes.<br/><br/>
                GANKPO créé le compte Gip pour le lieu et gère les demandes et la gestion de la déclaration au guso.<br/><br/>
                GANKPO et le Lieu devront signer un Contrat de Cession autorisant GANKPO à rémunérer les artistes pour chaque prestation.<br/><br/>
                
                Gankpo cherche à faciliter l’interaction entre les artistes et les salles de concerts, proposant un large carnet d’adresse de salle de musique, bars, clubs et d’artistes de la région parisienne.<br/><br/>
                
                Beaucoup d’artistes ne savent pas comment et où se produire à paris et beaucoup de gérant de lieux ne savent pas où trouver des artistes qui correspondent à leurs besoins.<br/><br/>
                
                Gankpo met en relation les artistes et les lieux culturel.
                Faciliter les échanges.<br/>
                Permettre que plus d’évènements aient lieu.<br/><br/>
                
                
                GANKPO négocie les contrats et partage l’évènement sur ses réseaux de distribution.
                </Subtitle>
                

            
            
        </BackgroundContainer>
    </BookingContainer>
    </>
  )
}

export default BookingSection

// Nom du Groupe/Artiste :
// Style musical :
// Nombre de musiciens :
// Biographie :
// Durée du show :
// Prix :


// Pièces à fournir : 

// Fiche Technique
// Photo
// Vidéo
// Liens audio (spotify, itunes, etc)
