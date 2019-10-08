import React, { Component } from 'react';

//jwt

import jwt from 'jwt-decode';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    componentDidMount = () => {
        this.Authorize();
    }


    LogOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    }

    Authorize = () => {
        if (localStorage.getItem("token") !== null) {
            var name = jwt(localStorage.getItem("token")).name;
            this.setState({
                name: name
            })
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm fixed-top row" style={{ backgroundColor: "black", marginBottom: "0", width: "100vw" }}>
                <a className="navbar-brand offset-1 col-2" href="/" style={{ backgroundColor: "orange", color: "white" }}><b>THE COFFEE HOUSE</b></a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{ color: "white" }}>
                    <li className="nav-item active">
                        <a className="nav-link" href="/story" style={{ border: "2px solid black" }}>Câu Chuyện thương hiệu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={{ border: "2px solid black" }}>Chuyện cà phê</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/order" style={{ border: "2px solid black" }}>Thực đơn</a>
                    </li>
                </ul>
                {
                    this.state.name !== "" ? <button className="btn btn-warning" onClick={this.LogOut} style={{width:"150px" , margin:"0"}}>Đăng xuất</button>
                    :<a href="/login" className="btn btn-success" >Đăng Nhập</a>
                }
            </nav>
        );
    }
}
export default NavBar;