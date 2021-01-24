import React from 'react';
import BookItem from './book-item.component';
import ErrorBoundry from './error.boundry.component';
import noResults from '../img/no-results.png';


class BookList extends React.Component {

    render() {
        const { books, scrollPosition, toggleScrollListener } = this.props;
        if (typeof books == 'undefined') {
            return (
                <div className="search-page__no-results">
                    <img className="search-page__no-results-image" src={noResults} alt="no-results" />
                    <div className="search-page__no-results-title">
                        No results found...
                    </div>
                </div>

            )
        }

        return (
            <div className='search-page__booklist'>
                {books.map((book) => <div key={book.id}>
                    <ErrorBoundry>
                        <BookItem toggleScrollListener={toggleScrollListener} scrollPosition={scrollPosition} book={book} />
                    </ErrorBoundry>
                </div>)}
            </div>

        )
    }
}

export default BookList;