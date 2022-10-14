import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import imageHero from '../../assets/images/image-hero2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faMessage } from '@fortawesome/free-solid-svg-icons';

function Landing() {
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="container-left">
                    <div id="title-container" className='title-container'>
                        <h1>Luiza Monção</h1>
                        <span>Software Developer</span>
                    </div>

                    <div className="image-container">
                        <img src={imageHero} alt=''/>
                    </div>
                </div>
                
                <div className="buttons-container">
                    <h2>How can I help you?</h2>
                    <h3>Let's work together!</h3>
                    <div className="buttons-horizontal-scroll">

                        <Link to='/about-me' className='about-me'>
                            <div className="button-about">
                                <FontAwesomeIcon icon={faUser} size="2x"/>
                                <p>About me</p>
                            </div>
                        </Link>

                        <Link to='/my-work' className='work'>
                            <div className="button-work">
                                <FontAwesomeIcon icon={faBriefcase} size="2x"/>
                                <p>My work</p>
                            </div>
                        </Link>

                        <Link to='/contact-me' className='where'>
                            <div className="button-contact">
                                <FontAwesomeIcon icon={faMessage} size="2x"/>
                                <p>Contact me</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing;