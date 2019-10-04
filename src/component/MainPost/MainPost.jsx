import React, { Component } from 'react';
//css
import './MainPost_css.css'

//import axios

import axios from 'axios';
class MainPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }
    componentDidMount = () => {
        this.GetPostFromDb();
    }
    GetPostFromDb = () => {
        var config = {
            method: "get",
            url: "https://localhost:44372/api/Posts/GetAll"
        }

        return axios(config).then(res => {
            if (res.status === 200 && res.data !== null) {
                this.setState({
                    posts: res.data
                });
            }
        })
    }
    render() {
        const postEml = this.state.posts !== [] ? this.state.posts.map((item, index) => {
            return (
                <div  className="card mr-3 mb-3" style={{ width: '25vw' }}>
                    <img src={`/img/Posts/${item.img}`} className="card-img-top" alt="/" style={{ height: '200px' }}/>
                    <div className="card-body" style={{borderTop:"2px solid black"}}>
                        <h5 className="card-title">{item.title}</h5>
                        <a href={`/post?id=${item.id}`} className="btn btn-success" >Xem chi tiết</a>
                    </div>
                </div>
            )
        }) : null;
        return (
            <div className="container-fluid main-background" style={{ width: "100%", height: "100vh", paddingTop: "150px" }}>
                <div className="offset-2 row" style={{ width: "70vw", height: "100px" }}>
                    <div className="MenuContent col-1">
                        <h1 style={{ color: "orange", borderBottom: "3px solid white", borderWidth: "5px" }}>POST</h1>
                    </div>
                    <div className="Menu col-2 offset-8">
                        <button className="btn btn-secondary">
                            Xem thêm
                        </button>
                    </div>
                </div>
                <div className="offset-2 row" style={{ width: "70vw", height: "100px" }}>
                    {postEml}
                </div>
            </div>
        );
    }
}

export default MainPost;