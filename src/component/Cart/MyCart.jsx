import React, { Component } from 'react';

class MyCart extends Component {
    render() {
        var mycart = JSON.parse(localStorage.getItem("cart"));
        const listCart = mycart !== null ? mycart.map((item, index) => {
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity * item.price}</td>
                </tr>
            )
        }) : null;
        return (
            <div className="col-2" style={{ height: "auto" }}>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" colSpan="1">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                        {listCart}
                    </thead>
                </table>
            </div>
        );
    }
}

export default MyCart;