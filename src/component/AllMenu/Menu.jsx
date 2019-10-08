import React, { Component } from 'react';
//axios
import axios from 'axios';
//my component
import Cart from '../Cart/MyCart'
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: [],
            cart: [],
            click: "",
            drinksTempt : []
        }
    }

    componentDidMount = () => {
        this.GetAllProduct();
        if (localStorage.getItem("cart") == null) {
            var arr = [];
            localStorage.setItem("cart", JSON.stringify(arr));
        }
    }

    GetAllProduct = () => {
        var config = {
            method: "get",
            url: "https://localhost:44372/api/Products/getAll"
        };
        return axios(config).then(res => {
            if (res.status === 200 && res.data !== null) {
                this.setState({
                    drinksTempt: res.data,
                    drinks : res.data
                })
            }
        })
    }

    LiveSearch = (e) =>{
        var name = e.target.value
        if(name === ""){
            this.setState({
                drinks : this.state.drinksTempt
            });
        } else{
            var arr = [];
            this.state.drinksTempt.forEach((item) => {
                if(item.name.toUpperCase().includes(name.toUpperCase())){
                    arr.push(item);
                }
            })
            this.setState({
                drinks : arr
            })
        }
    }


    AddToCart = (item) => {
        var check = false;
        var itemAdd = {
            id: item.id,
            name: item.name,
            quantity: 1,
            price: item.price
        }
        var cart = JSON.parse(localStorage.getItem("cart"));
        console.log(cart);
        cart.forEach(element => {
            if (element.id === itemAdd.id) {
                element.quantity = parseInt(element.quantity) + 1;
                check = true;
            }
        });
        if (!check) {
            cart.push(itemAdd);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        this.setState({
            click: "1"
        })
    }

    render() {
        const menuItem = this.state.drinks !== [] ? this.state.drinks.map((item, index) => {
            return (
                <div key={index} className="card mr-3 mb-3" style={{ width: '14vw', height: "auto" }}>
                    <img src={`/img/products/${item.img}`} style={{ height: "200px" }} className="card-img-top" alt="/" />
                    <div className="card-body">
                        <h6 className="card-title">{item.name}</h6>
                        <p className="card-text">{item.price} VNĐ</p>
                    </div>
                    <button onClick={this.AddToCart.bind(this, item)} className="btn btn-success" style={{ width: "100px", height: "40px" }}>Add</button>
                </div>
            )
        }) : null
        return (
            <div className="col-8 pt-5">
                <div className="input-group" style={{ width: "300px", marginBottom: "20px" }}>
                    <div className="row">
                        <input onChange = {this.LiveSearch} type="text" className="form-control" placeholder="search" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-9 row" style={{ height: "auto" }}>
                        {menuItem}
                    </div>
                    <Cart />
                </div>
            </div>

        );
    }
}

export default Menu;