import React, { Component } from 'react';


//import axios
import axios from 'axios';

class ListPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: {}
        }
    }
    componentDidMount = () => {
        this.GetAllPost();
    }
    GetAllPost = () => {
        var a = (new URLSearchParams(window.location.search));
        var config = {
            method: "get",
            url: `https://localhost:44372/api/Posts/${a.toString().split("=")[1]}`
        }
        axios(config).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                this.setState({
                    posts: res.data
                })
            }
        })
    }
    render() {
        return (
            <div className="container-fluid" style={{ height: "auto", /*backgroundColor:"red", */paddingTop: "100px" }}>
                <div className="row">
                        <img style={{width:"60vw" , height:"500px"}} src={`/img/posts/${this.state.posts.img}`} className="card-img-top" alt="/" />
                    <div className="card mr-3 mb-3" style={{ width: '100%' }}>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.posts.title}</h5>
                            <p>{this.state.posts.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListPost;