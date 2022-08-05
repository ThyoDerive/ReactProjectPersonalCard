import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faCcStripe, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return(
        <div className="Footer">
            <a href="http://"><FontAwesomeIcon icon={faCcStripe} /></a>
            <FontAwesomeIcon icon={faInstagramSquare} />
            <FontAwesomeIcon icon={faTwitterSquare} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithubSquare} />
        </div>
    )
}