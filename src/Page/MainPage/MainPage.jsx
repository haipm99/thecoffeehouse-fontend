import React, { Component } from 'react';

// import component

import NavBar from '../../component/NavBar';
import Carousel from '../../component/Carousel';
import MainPageMenu from '../../component/Menu/MainPageMenu';
import MainPost from '../../component/MainPost/MainPost';
import Footer from '../../component/Footer/Footer';
// import css

import './MainPage_css.css';
class MainPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Carousel />
                <MainPageMenu />
                <MainPost />
                <Footer />
            </div>
        );
    }
}

export default MainPage;