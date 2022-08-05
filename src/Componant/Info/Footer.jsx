import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faCcStripe, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return(
        <div className="Footer">
            <a href="https://buy.stripe.com/aEUaIs4OwbEU69qcMM"><FontAwesomeIcon icon={faCcStripe} /></a>
            <a href="https://www.instagram.com/thyo_dev/"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            <a href="https://twitter.com/ThyoDev"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a href="https://www.linkedin.com/in/theo-derive-857b28246/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href=""><FontAwesomeIcon icon={faGithubSquare} /></a>
        </div>
    )
}