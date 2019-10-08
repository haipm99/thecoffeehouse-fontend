import React, { Component } from 'react';


//import component
import NavBar from '../../component/NavBar'; 
import TopContent from '../../component/StoryComponent/TopContent';
import MiddleContent from '../../component/StoryComponent/MiddleContent';
import Footer from '../../component/Footer/Footer';
class Story extends Component {
    render() {
        return (
            <div className="container-fluid" style={{padding:"0"}}>
                <NavBar />
                <TopContent />
                <MiddleContent />
                <Footer />
            </div>
        );
    }
}

export default Story;