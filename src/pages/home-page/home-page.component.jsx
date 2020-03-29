import React from 'react';
import SearchField from '../../components/search-field/search-field.component';
import bookImage from '../../img/book_offer3.png';

class HomePage extends React.Component {

    state = {
        position: true,
        imageLoad: false
    }

    componentDidMount() {
        if(this.props.isHomePage === true) {
            return;
        } else {
            this.props.setHomePage(true);
        } 
    }
    render() {
        const {bookLoad, isHomePage} = this.props;
        return (
            <React.Fragment>
                <section className="offer">
                    <div className="container">
                        <div className='offer__block' style={{
                                height: '950px',
                                background: `url(${bookImage})`,
                                backgroundPosition: 'bottom',
                                backgroundRepeat: 'no-repeat'  
                                }}>
                            <div className="search-field__title">
                                What would you like to read?
                            </div>
                            <SearchField isHomePage={isHomePage} bookLoad={bookLoad}/>
                        </div>
                    </div>
                </section>
            </React.Fragment>  
        )
    }
}

export default HomePage;