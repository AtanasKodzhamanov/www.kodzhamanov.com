import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faPython, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { Element } from 'react-scroll';
import useGoogleAnalytics from './useGoogleAnalytics';


library.add(faPython, faJsSquare, faReact, faGithub, faLinkedin);


const About = () => {
    useGoogleAnalytics();

    return (

        <Element name="About" className="section">
            <div className="name-container">
                <div className="name">
                    <h1>Atanas Kodzhamanov</h1>
                </div>
                <div className="about-links-container">
                    <h3>Software Engineer and Economist</h3>
                    <a href="mailto:kodzhamanov@gmail.com">kodzhamanov@gmail.com</a>
                </div>
            </div>
            <div className="about-content">
                <p>Hello there! Welcome to my portfolio website. This is where I get to present some of the projects I've worked on and share my profile with potential employers and collaborators.
                </p>
                <p>Take a look around and let's connect to see how we can work together on something awesome!</p>
            </div>
            <div className="icons-container">
                <div>
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="6x"
                        style={{ color: "#2c3e50" }}
                        onClick={() => window.open("https://github.com/AtanasKodzhamanov/", "_blank")}
                    />
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        size="6x"
                        style={{ color: "#2c3e50" }}
                        onClick={() => window.open("https://www.linkedin.com/in/atanas-kodzhamanov/", "_blank")}
                    />
                </div>
                <hr />
            </div>
        </Element>
    );
};

export default About;





