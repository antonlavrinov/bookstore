import React from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchField extends React.Component {

    state = {
        field: ''

    }

    handleChange = (e) => {
        this.setState({field: e.target.value})
      }

    onSearchSubmit = (e) => {

        if (this.state.field === '') {
            e.preventDefault();
        } else {
            e.preventDefault();
            const {bookLoad, history} = this.props;
            history.push(`books`);
            bookLoad(this.state.field);
            this.setState({field: ''});
        }
    }

    render() { 
        const {isHomePage} = this.props;
        const searchFieldGlass = isHomePage ? '' : 'button_top';
        const classsInput = isHomePage ? '' : 'search-field__input_top';

        return (
            <div className={`search-field flex`}>                
                <form className='search-field__form' method='post' onSubmit={this.onSearchSubmit}>
                    <input value={this.state.field} autoComplete='off' placeholder="Type here..." onChange={this.handleChange} className={`search-field__input ${classsInput}`}  name='inputt'/>
                    <button className={`button button_offer ${searchFieldGlass}`} type='submit'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchField);