import React, { Component } from 'react';
//axios
import axios from 'axios'
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks : [],
        }
    }

    componentDidMount = () => {
        this.GetAllProduct();
    }

    GetAllProduct = () => {
        var config = {
            method:"get",
            url : "https://localhost:44372/api/Products/getAll"
        };
        return axios(config).then(res => {
            if(res.status === 200 && res.data !== null){
                this.setState({
                    drinks : res.data
                })
            }
        })
    }
    
    render() {
        const menuItem = this.state.drinks !== [] ? this.state.drinks.map((item,index) => {
            return (
                <div className="card mr-3 mb-3" style={{ width: '15vw', height:"45vh" }}>
                    <img src={`/img/products/${item.img}`} style={{height:"200px"}} className="card-img-top" alt="/" />
                    <div className="card-body">
                        <h6 className="card-title">{item.name}</h6>
                        <p className="card-text">{item.price} VNĐ</p>
                        <a href="/" className="btn btn-success" style={{backgroundColor:"organe"}}>Thêm vào giỏ</a>
                    </div>
                </div>
            )
        }) : null
        return (
            <div className="col-6 pt-5 row" style={{height:"auto"}}>
                {menuItem}
            </div>
        );
    }
}

export default Menu;