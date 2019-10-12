import React, { Component } from 'react';

//import sweet alert
import Swal from "sweetalert2";
//import css
import './login.css';
//import axios
import axios from 'axios';
//jwtdecode
import jwt from 'jwt-decode';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username :"",
            password:"",
        }
    }
    
    
    Login = (e) =>{
        e.preventDefault();
        var config = {
            method:"post",
            url:"https://localhost:44372/api/AppUser/login",
            data : {
                "username" :this.state.username,
                "password":this.state.password,
            }
        };
       return  axios(config).then(res => {
            if(res.status === 200 && res.data !== null){
                localStorage.setItem("token",res.data.access_token);
                if(jwt(res.data.access_token).role === "admin"){
                    window.location.href = "/ManagePost";
                }
                else{
                    window.location.href = "/";
                }
            }
        }).catch(err=>{
            Swal.fire("Wrong username or password", "", "error");
        })
    }

    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="login-container" style={{ width: "100vw", height: "100vh", paddingTop: "200px" }}>
                <div>
                    <form method="POST" style={{backgroundColor:" rgba(0, 0, 0, 0.5) "}} onSubmit = {this.Login}>
                        <center><h1 style={{color:"white"}}>Login</h1></center>
                        <div className="form-group">
                            <div className="input-group">
                                <input name="username" className="form-control input-sm" placeholder="Username" onChange={this.onchange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.onchange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input className="btn btn-success" style={{marginRight:"10px"}} type="submit" value="Login"/>
                                <a href="/register" className="btn btn-warning w-30">Register</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;