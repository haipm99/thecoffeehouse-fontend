import React, { Component } from 'react';

//import axios

import axios from 'axios';
class AdminArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    GetPostFromDB = () => {
        const config = {
            method: 'get',
            url: 'https://localhost:44372/api/Posts/GetAll',
        }

        return axios(config).then(res => {
            console.log(res.data);
            this.setState({
                posts: res.data
            });
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
                    <td><a href="/" className="btn btn-success">Update</a></td>
                    <td><a href="/" className="btn btn-warning">Delete</a></td>
                    <td><a href="/" className="btn btn-primary">Detail</a></td>
                </tr>
            )
        }) : null;
        return (
            <div style={{ left: "300px", position: "absolute", top: "15%" }}>
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
                                        <th>Edit</th>
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
                                <ul className="pagination justify-content-center" id="ulPhanTrang">
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <header className="head-form mb-0">
                                <h2 id="header-title">Log In</h2>
                            </header>
                            {/* Modal Header */}
                            {/* 	<div class="modal-header">
					<h4 class="modal-title" id="modal-title">Modal Heading</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div> */}
                            {/* Modal body */}
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-user" /></span>
                                            </div>
                                            <input type="msnv" name="msnv" id="msnv" className="form-control input-sm" placeholder="Mã số nhân viên" />
                                        </div>
                                        <span className="sp-thongbao" id="tbMaNV" />
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-address-book" /></span>
                                            </div>
                                            <input type="name" name="name" id="name" className="form-control input-sm" placeholder="Họ và tên" />
                                        </div>
                                        <span className="sp-thongbao" id="tbTen" />
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-envelope" /></span>
                                            </div>
                                            <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email" />
                                        </div>
                                        <span className="sp-thongbao" id="tbEmail" />
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-key" /></span>
                                            </div>
                                            <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Mật khẩu" />
                                        </div>
                                        <span className="sp-thongbao" id="tbMatKhau" />
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                            </div>
                                            <input type="text" name="ngaylam" id="datepicker" className="form-control" placeholder="Ngày làm" />
                                        </div>
                                        <span className="sp-thongbao" id="tbNgay" />
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-briefcase" /></span>
                                            </div>
                                            <select className="form-control" id="chucvu">
                                                <option>Chọn chức vụ</option>
                                                <option>Sếp</option>
                                                <option>Trưởng phòng</option>
                                                <option>Nhân viên</option>
                                            </select>
                                        </div>
                                        <span className="sp-thongbao" id="tbChucVu" />
                                    </div>
                                </form>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer" id="modal-footer">
                                <button id="btnThemNV" type="button" className="btn btn-success">Thêm người dùng</button>
                                <button id="btnCapNhatNV" type="button" className="btn btn-success">Cập nhật</button>
                                <button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminArea;