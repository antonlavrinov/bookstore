import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top';

ReactDOM.render(
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop/>
        <App />
    </BrowserRouter>

 , document.getElementById('root'));


