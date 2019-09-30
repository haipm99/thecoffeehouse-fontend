import React, { Component } from 'react';

//import axios
import axios from 'axios';
//import swal
import swal from 'sweetalert2';
//import jwt-decode
import jwtDecode from 'jwt-decode';
class MyCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: ""
        };
    }

    updateCart = (item, e) => {
        var cart = JSON.parse(localStorage.getItem("cart"));
        cart.forEach(element => {
            if (element.id === item.id) {
                element.quantity = e.target.value;
            }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        this.setState({
            click: "1"
        })
    }

    deleteCart = (item) => {
        var cart = JSON.parse(localStorage.getItem("cart"));
        var i = 0;
        cart.forEach(element => {
            if (element.id === item.id) {
                cart.splice(i, 1);
            }
            i++;
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        this.setState({
            click: "1"
        })
    }

    checkOutCart = (e) => {
        e.preventDefault();
        var cart = JSON.parse(localStorage.getItem("cart"));
        //console.log(jwtDecode(localStorage.getItem("token")));
        if (cart.length !== 0) {
            var config = {
                method: "post",
                url: `https://localhost:44372/api/Buying/createInvoice/${jwtDecode(localStorage.getItem("token")).unique_name}`
            }
            axios(config).then(res => {
                if (res.status === 200 && res.data !== null) {
                    this.saveCartToDB(res.data.id)
                }
            })
        }
    }

    saveCartToDB = (idCart) => {
        var cart = JSON.parse(localStorage.getItem("cart"));
        var check = false;
        cart.forEach(item => {
            var data = {
                "idPro": item.id,
                "idInvoide": idCart,
                "quantity": item.quantity,
                "total": item.quantity * item.price
            };
            var config = {
                method: "post",
                url: "https://localhost:44372/api/Buying/createDetail",
                data: data
            };
            axios(config).then(res => {
                if (res.status !== 200) {
                    check = false;
                    return;
                }
            })
        });
        if (!check) {
            swal.fire('Đặt hàng thành công', '', 'success');
        }
    }

    render() {
        var mycart = JSON.parse(localStorage.getItem("cart"));
        const listCart = mycart !== null ? mycart.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td><input onChange={this.updateCart.bind(this, item)} type="number" min="0" value={item.quantity} style={{ width: "50px" }} /></td>
                    <td>{item.quantity * item.price}</td>
                    <td><button onClick={this.deleteCart.bind(this, item)} className="btn btn-warning" style={{ width: "30px", height: "30px" }}>x</button></td>
                </tr>
            )
        }) : null;
        return (
            <div className="col-3" style={{ height: "auto" }}>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" colSpan="1">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listCart}
                        {
                            JSON.parse(localStorage.getItem("cart")).length !== 0 ?
                                <tr><td colSpan="3"><button onClick={this.checkOutCart} className="btn btn-success">Thanh toán</button></td></tr>
                                : null
                        }
                    </tbody>

                </table>
            </div>
        );
    }
}

export default MyCart;