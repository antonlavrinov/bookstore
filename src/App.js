import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import './styles/App.sass';

import BookService from './services/bookservice';
import Header from './components//header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home-page/home-page.component';
import SearchPage from './pages/search-page/search-page.component';


class App extends React.Component {

  bookService = new BookService();

  constructor() {
    super();
    this.state = {
      books: [],
      loading: false,
      isHomePage: true
    }
  }



  setHomePage = (boolean) => {
    this.setState({isHomePage: boolean});
  }

  bookLoad = (bookToGet) => {
    this.setState({loading: true});
    this.bookService.getAllBooks(bookToGet)
     .then((books) => {
       this.setState({books: books.items});
      //  console.log(this.state.books);
       this.setState({loading: false});
     });
  }


  render() {
    const {books} = this.state;
    const backgroundColor = this.state.isHomePage ? 'App_homepage' : 'App_searchpage';

    return (
      <div className={`App ${backgroundColor}`}>
        <Header bookLoad={this.bookLoad} isHomePage={this.state.isHomePage}/>
        <Switch>
          <Route exact path='/' component={() => <HomePage handleChange={this.handleChange} onSearchSubmit={this.onSearchSubmit} bookLoad={this.bookLoad} isHomePage={this.state.isHomePage} setHomePage={this.setHomePage} />}/>
          <Route path='/books' component={() => <SearchPage books={books} loading={this.state.loading} bookLoad={this.bookLoad} isHomePage={this.state.isHomePage} setHomePage={this.setHomePage}/>} />
          <Redirect to='/'/>
        </Switch>  
        <Footer isHomePage={this.state.isHomePage}/>
      </div>

    );
  }
}

export default withRouter(App);



