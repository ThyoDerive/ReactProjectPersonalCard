import React from 'react'
import PhotoMe from '../assets/PP.jpg'
import Footer from '../Componant/Info/Footer' 
import InfoAboutInterest from './Info/Info-About-Interest'
import InfoButton from './Info/Info-Button'
import InfoPerso from './Info/Info-Perso'

export default function Info() {
    return(
        <div className='Info-Container'>
            <img className='Photo' src={PhotoMe} alt="Ma personne" />
            <div className='Info-Bottom'>
                <InfoPerso />
                <InfoButton />
                <InfoAboutInterest />
                <Footer />
            </div>
        </div>
    )
}