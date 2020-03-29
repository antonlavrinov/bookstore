import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import {CSSTransition} from 'react-transition-group';
import StarRatingComponent from 'react-star-rating-component';


const BookItemPopup = ({getRating,clicked, getImage, clickPopup, getAuthor, getTitle, getDescription, getLink}) => {
    const activePopup = clicked ? 'book-item-popup_active' : '';
    const activeOverlay = clicked ? 'book-item-popup__overlay_active' : '';
    return (
        <React.Fragment>
            <CSSTransition classNames="popup" unmountOnExit in={clicked} timeout={300}>
                <div className={`book-item-popup ${activePopup}`}>
                    <div className="container">
                        <div className="book-item-popup__window">
                            <button className="button button_close-popup" onClick={() => clickPopup()}><FontAwesomeIcon icon={faTimes}/></button>
                            <div className="book-item-popup__window-block flex">
                                <div className="book-item-popup__image" style={{
                                        background: `url(${getImage()})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'  
                                        }} >
                                    
                                </div>
                                <div className="book-item-popup__info">   
                                    <div className="book-item-popup__title">{getTitle('long')}</div>
                                    <div className="book-item-popup__author">{getAuthor('long')}</div>
                                    <StarRatingComponent className="book-item-popup__rating"
                                                  name="rate2" 
                                                  editing={false}
                                                  renderStarIcon={() => <FontAwesomeIcon icon={faStar}/>}
                                                  starCount={5}
                                                  emptyStarColor={'#dae6f4'}
                                                  value={getRating()}
                                    />
                                    {getDescription()}
                                    {/* <div className="book-item-popup__descr">{getDescription()}</div> */}
                                    <a className="button button_popup" rel="noopener noreferrer" target="_blank" href={`${getLink()}`}>Read <FontAwesomeIcon icon={faChevronRight}/></a>  
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </CSSTransition>
            <div onClick={() => clickPopup()} className={`book-item-popup__overlay ${activeOverlay}`}></div>
        </React.Fragment>

    )
}

export default BookItemPopup;