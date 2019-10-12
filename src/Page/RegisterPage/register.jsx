import React, { Component } from 'react';
import '../LoginPage/login.css';
import Swal from "sweetalert2";
import axios from "axios";
class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirm: "",
            fullname: "",
            phone: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    checkValidateRegister = () => {
        if (this.state.password !== this.state.confirm) {
            Swal.fire("Password must be same to confirm", "", "error");
            return false;
        }
        return true;
    }

    Register = (e) => {
        e.preventDefault();
        if (this.checkValidateRegister()) {
            var data = {
                "username": this.state.username,
                "fullname":  this.state.fullname,
                "confirm": this.state.confirm,
                "password": this.state.password,
                "phone": this.state.phone
            }
            var config = {
                method: "post",
                url: "https://localhost:44372/api/AppUser/register",
                data: data
            }
            return axios(config).then(res => {
                if(res.status === 200)
                {
                    Swal.fire("Register success.","","success").then(() => {
                        window.location.href ="/login";
                    })
                }
            }).catch((error) => {Swal.fire(error.message,"","error")})
        }
    }
    render() {
        return (
            <div className="login-container" style={{ width: "100vw", height: "100vh", paddingTop: "200px" }}>
                <div>
                    <form method="POST" style={{ backgroundColor: " rgba(0, 0, 0, 0.5) " }} onSubmit={this.Register}>
                        <center><h1 style={{ color: "white" }}>Register</h1></center>
                        <div className="form-group">
                            <div className="input-group">
                                <input required name="username" className="form-control input-sm" placeholder="Username" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input required className="form-control" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input required className="form-control" type="password" name="confirm" placeholder="Confirm Password" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input required className="form-control" type="text" name="fullname" placeholder="fullname" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input required className="form-control" type="text" name="phone" placeholder="phone" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input className="btn btn-success" style={{ marginRight: "10px" }} type="submit" value="Register" />
                                <a href="/login" className="btn btn-warning w-30">Login</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default register;