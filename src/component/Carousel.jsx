import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselId" className="carousel slide" data-ride="carousel" style={{width:"100%" , height:"100vh"}}>
                <ol className="carousel-indicators">
                    <li data-target="#carouselId" data-slide-to={0} className="active" />
                    <li data-target="#carouselId" data-slide-to={1} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="/img/Banner/banner1.jpg" alt="First slide"  style={{width:"100%" , height:"100vh"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/Banner/banner2.png" alt="Second slide"  style={{width:"100%" , height:"100vh"}}/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

        );
    }
}

export default Carousel;