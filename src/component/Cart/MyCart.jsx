import React, { Component } from 'react';

class MyCart extends Component {
    render() {
        return (
            <div className="col-2 pt-5" style={{ height: "auto" }}>
                <table className="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default MyCart;