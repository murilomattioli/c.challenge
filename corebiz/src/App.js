import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './screen/home';
import * as services from './services';
import * as util from './util';

export default class App extends React.Component {
    render() {
        return (
            <div className="f1 col">
                <Header />
                    <Home />
                <Footer />
            </div>
        )
    }
}