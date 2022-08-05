import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function InfoButton() {
    return(
        <div className="Info-Button">
            <span className="Info--button-email">
                <a href="mailto:derivetheo96@gmail.com">
                    <FontAwesomeIcon style={{color: "#1E1F26"}} icon={faEnvelope} />
                    <span style={{"margin-left": 8}}>Email</span>
                </a>
            </span>
            <span className="Info--button-linkedin">
                <a href="">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span style={{"margin-left": 8}}>Linkedin</span>
                </a>
            </span>
        </div>
    )
}