import React from 'react';
import SearchField from './search-field.component';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Header = ({ bookLoad, isHomePage }) => {

    const headerTop = isHomePage ? '' : 'header_top';
    const searchFieldShow = isHomePage ? null : <SearchField bookLoad={bookLoad} isHomePage={isHomePage} />;
    const headerStyle = isHomePage ? '' : 'header_searchpage';
    return (
        <header className={`header ${headerTop} ${headerStyle}`}>
            <div className="container">
                <div className="header__block">

                    <div className="logo">
                        <Link className="logo__link flex" to='/'>
                            <div className="logo__icon">
                                <FontAwesomeIcon icon={faBookmark} />
                            </div>
                            <div className="logo__title">
                                Bookstore
                            </div>
                        </Link>
                    </div>
                    <nav className="header__menu flex">
                        {searchFieldShow}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;


