import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ isHomePage }) => {
    const footerStyle = isHomePage ? '' : 'footer__block_searchpage';
    return (
        <footer className="footer">
            <div className="container">
                <div className={`footer__block flex ${footerStyle}`}>
                    <div className="creator">
                        <a className="creator__link flex" target="_blank" rel="noopener noreferrer" href='https://github.com/antonlavrinov'>
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                            <div className="creator__name">
                                <span className="creator__small-font">Created by</span> <br />Anton Lavrinov
                            </div>
                        </a>
                    </div>
                    <div className="react-icon">
                        <a className="react-icon__link flex" target="_blank" rel="noopener noreferrer" href='https://reactjs.org/' >
                            <FontAwesomeIcon icon={faReact} size="2x" />
                            React
                        </a>
                    </div>

                    <div className="google-icon">
                        <a className="google-icon__link" target="_blank" rel="noopener noreferrer" href='https://developers.google.com/books'>
                            Google Books APIs
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;