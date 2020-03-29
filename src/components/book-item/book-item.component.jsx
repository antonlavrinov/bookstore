import React from 'react';
import noCover from '../../img/no_cov.jpeg';
import BookItemPopup from '../book-item-popup/book-item-popup';

class BookItem extends React.Component {

    state = {
        clicked: false,
        mounted: false,
        imageLoad: false
    }

    clickPopup = () => {
        this.setState({clicked: !this.state.clicked});
    }
    
    componentWillUnmount() {
        this.setState({imageLoad: false})
    }


    getRating = () => {
        const {book} = this.props;
        if (typeof book.volumeInfo.averageRating == 'undefined') {
            return 0;
        } else {
            return book.volumeInfo.averageRating;
        }
    }
    
    getDescription = () => {
        const {book} = this.props;
        if (typeof book.volumeInfo.description == 'undefined') {
            return;
        } else {
            return <div className="book-item-popup__descr">{book.volumeInfo.description}</div>;
        }
    }

    getTitle = (size) => {
        const {book} = this.props;
        if (typeof book.volumeInfo.title == 'undefined') {
            return '';
        }else if (size === 'long') {
            return book.volumeInfo.title;
        } else {
            const subtractTitle = 50;
            const subtractedTitle = (book.volumeInfo.title.length > subtractTitle) ? book.volumeInfo.title.substring(0, subtractTitle) + '...' : book.volumeInfo.title;
            return subtractedTitle;
        }
    }

    getAuthor = (size) => {
        const {book} = this.props;
        if (typeof book.volumeInfo.authors == 'undefined') {
            return '';
        }else if (size === 'long') {
            return book.volumeInfo.authors;        
        } else {
            const subtractAuthor = 50;
            const subtractedAuthor = (book.volumeInfo.authors.join().length > subtractAuthor) ? book.volumeInfo.authors.join().substring(0, subtractAuthor) + '...' : book.volumeInfo.authors.join();
            return subtractedAuthor;
        }
    }

    getImage = () => {
        const {book} = this.props;
 
        if (typeof book.volumeInfo.imageLinks == 'undefined') {
            return noCover;
        } else {
            return book.volumeInfo.imageLinks.thumbnail;
        }
    }

    getLink = () => {
        const {book} = this.props;
        if (typeof book.volumeInfo.previewLink == 'undefined') {
            return '';
        } else {
            return book.volumeInfo.previewLink;
        }
    }

    render() {
        const bookActive = this.state.imageLoad ? 'book-item_active' : '';
        let imgBkg = new Image();
        imgBkg.src = this.getImage();
        imgBkg.onload = () => this.state.imageLoad ? null : this.setState({imageLoad: true});
        return (
            <React.Fragment>
                    <div className={`book-item ${bookActive}`} onClick={this.clickPopup} >
                        <div className="book-item__block">
                            <div className="book-item__image" style={{
                                backgroundImage: `url('${imgBkg.src}')`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'  
                                }} >  
                            </div>
                        </div>
                        <div className="book-item__title">{this.getTitle()}</div>
                        <div className="book-item__authors">{this.getAuthor()}</div>
                    </div>
                        <BookItemPopup getRating={this.getRating} clicked={this.state.clicked} getImage={this.getImage} getAuthor={this.getAuthor} getTitle={this.getTitle} clickPopup={this.clickPopup} getDescription={this.getDescription} getLink={this.getLink}/>
            </React.Fragment>
        )
    }
}

export default BookItem;