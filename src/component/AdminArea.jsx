import React, { Component } from 'react';

//import axios

import axios from 'axios';
//import jwt-decode
import jwt_decode from 'jwt-decode';
//sweet alert
import Swal from 'sweetalert2';
class AdminArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            title: "",
            content: "",
            img: "",
            post: {},
            testing: "1",
        }
    }

    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    GetPostFromDB = () => {
        const config = {
            method: 'get',
            url: 'https://localhost:44372/api/Posts/GetAll',
        }

        return axios(config).then(res => {
            this.setState({
                posts: res.data
            });
        })
    }

    DeletePost = (id) => {
        var config = {
            method: "delete",
            url: `https://localhost:44372/api/Posts/${id}`,
        }

        return axios(config).then(res => {
            if (res.status === 200 && res.data != null) {
                Swal.fire('Create success', '', 'success').then(() => {
                    this.GetPostFromDB();
                })

            }
        })
    }

    CreatePost = (e) => {
        e.preventDefault();
        if (this.state.title !== "" && this.state.content !== "" && this.state.img !== "") {
            var data = {
                "title": this.state.title,
                "content": this.state.content,
                "img": this.state.img,
                "userId": jwt_decode(localStorage.getItem("token")).unique_name
            };
            var config = {
                method: 'post',
                url: 'https://localhost:44372/api/Posts/Create',
                data: data
            }
            return axios(config).then(res => {
                if (res.status === 200 && res.data !== null) {
                    Swal.fire('Create success', '', 'success').then(() => {
                        window.location.reload();
                    });
                }
            })
        }
    }

    GetDetail = (id, index) => {

        this.state.posts.forEach((element) => {
            if (element.id === id) {
                return this.getPoduct(element, () => { });
            }
        });
    }

    getPoduct = (post, callback) => {
        this.setState({
            post: post
        });
        callback();
    }

    UpdatePost = async (e,id) => {
        
        e.preventDefault();
        var data = {
            "title": this.state.title,
            "content": this.state.post.content,
            "img": this.state.post.img,
            "userId": jwt_decode(localStorage.getItem("token")).unique_name,
        }

        var config = {
            method: "patch",
            url: `https://localhost:44372/api/Posts/${id}`,
            data: data
        };

        await axios(config).then(res => {
            if(res.status === 200 && res.data != null){
                console.log(res);
                Swal.fire('Create success', '', 'success').then( () => {

                    this.GetPostFromDB();
                   // window.locattion.reload();
                })
            }
        })

    }

    componentDidMount = () => {
        this.GetPostFromDB();
    }

    render() {
        const elm = this.state.posts !== [] ? this.state.posts.map((item, index) => {
            return (
                <tr>
                    <td>{item.title}</td>
                    <td>{item.postedDate}</td>
                    <td>{item.img}</td>
                    <td><button className="btn btn-warning w-100" onClick={this.DeletePost.bind(this, item.id)}>Delete</button></td>
                    <td><button data-toggle="modal" onClick={this.GetDetail.bind(this, item.id, index)} className="btn btn-primary w-100" data-target="#myModal2">Detail</button></td>
                </tr>
            )
        }) : null;
        return (
            <div style={{ left: "300px", position: "absolute", top: "5%" }}>
                <div className="container" style={{ margin: "none" }}>
                    <div className="card text-center" style={{ width: "1100px" }}>
                        {/* Header */}
                        <div className="card-header myCardHeader">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="text-left text-primary font-weight-bold">Posts</h3>
                                </div>
                                <div className="col-md-6 text-right">
                                    <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal">Add Post</button>
                                </div>
                            </div>
                        </div>
                        {/* Body */}
                        <div className="card-body">
                            {/*Search*/}
                            {/* <div className="row mb-3">
                                <div className="col">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Tên nhân viên" id="searchName" />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <table className="table table-bordered table-hover myTable">
                                <thead className="text-primary">
                                    <tr>
                                        <th>Title</th>
                                        <th>Posted Date</th>
                                        <th>Img</th>
                                        <th>Delete</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody id="tableDanhSach">
                                    {elm}
                                </tbody>
                            </table>
                        </div>
                        {/* Footer */}
                        <div className="card-footer myCardFooter">
                            <nav>
                                <ul className="pagination justify-content-center">
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* modal */}
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <header className="head-form mb-0">
                                <h2 id="header-title">Create Posts</h2>
                            </header>
                            {/* Modal Header */}
                            {/* 	<div class="modal-header">
					<h4 class="modal-title" id="modal-title">Modal Heading</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div> */}
                            {/* Modal body */}
                            <form onSubmit={this.CreatePost}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input name="title" className="form-control input-sm" placeholder="Title" onChange={this.onchange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <textarea className="form-control" name="content" placeholder="Content" rows="3" onChange={this.onchange}></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input type="file" name="img" className="form-control" placeholder="Image" onChange={this.onchange} />
                                        </div>
                                    </div>
                                </div>
                                {/* Modal footer */}
                                <div className="modal-footer" id="modal-footer">
                                    <button type="submit" className="btn btn-success">Add Post</button>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* model 2 */}
                <div className="modal fade" id="myModal2">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <header className="head-form mb-0">
                                <h2 id="header-title">Post Detail</h2>
                            </header>
                            <form onSubmit= {this.UpdatePost.bind(this,this.state.post.id)}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input type="text" name="title" className="form-control input-sm" defaultValue={this.state.post.title} onChange={this.onchange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <textarea className="form-control" name="content" rows="3" value={this.state.post.content} />
                                        </div>
                                    </div>
                                </div>
                                {/* Modal footer */}
                                <div className="modal-footer" id="modal-footer">
                                    <button type="submit" className="btn btn-success">Update</button>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminArea;