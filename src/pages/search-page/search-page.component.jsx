import React from 'react';
import Spinner from '../../components/spinner/spinner.component';
import BookList from '../../components/book-list/book-list.component';

class SearchPage extends React.Component {

    componentDidMount() {
        if(this.props.isHomePage === false) {
            return;
        } else {
            this.props.setHomePage(false);
        } 
    }

    render() {
        const {books, loading} = this.props;
        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <BookList books={books} loading={loading}/> : null;
        return (
            <React.Fragment>
                <section className="search-page">
                    <div className="container">
                        <div className="search-page__block">
                        {spinner}
                        {content}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default SearchPage;