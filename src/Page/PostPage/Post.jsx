import React, { Component } from 'react';

//import component
import NavBar from '../../component/NavBar';
import ImageContainer from '../../component/PostComponent/ContainerImagePost';
import PostItem from '../../component/PostComponent/ListPost';
//import css
class Post extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <ImageContainer />
                <PostItem />
            </div>
        );
    }
}

export default Post;