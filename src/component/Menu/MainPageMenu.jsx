import React, { Component } from 'react';


// import axios

import axios from 'axios';
class MainPageMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount = () => {
        this.GetProductFromDb();
    }

    GetProductFromDb = () => {
        var config = {
            method: "get",
            url: "https://localhost:44372/api/Products/getMainPageProduct",
        }

        return axios(config).then(res => {
            if (res.status === 200 && res.data !== null) {
                this.setState({
                    products: res.data
                })
            }
        })
    }
    render() {

        const menu = this.state.products !== [] ? this.state.products.map((item, index) => {
            return (
                <div className="card mr-3 mb-3" style={{ width: '24vw' }}>
                    <img src={`/img/products/${item.img}`} className="card-img-top" alt="/" />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.price} VNĐ</p>
                        <a href="/" className="btn btn-outline-primary" style={{backgroundColor:"organe"}}>Mua ngay</a>
                    </div>
                </div>
            );
        }) : null;
        return (
            <div className="container-fluid" style={{ height: "auto", /*backgroundColor:"red", */paddingTop: "100px" }}>
                <div className="offset-2 row" style={{ width: "70vw", height: "100px" }}>
                    <div className="MenuContent col-1">
                        <h1 style={{ color: "orange" , borderBottom:"3px solid black", borderWidth:"3px" }}>Menu</h1>
                    </div>
                    <div className="Menu col-2 offset-8">
                        <a href="/order" className="btn btn-secondary">
                            Xem thêm tất cả sản phẩm
                        </a>
                    </div>
                </div>
                <div className="row offset-2 ">
                    {menu}
                </div>
            </div>
        );
    }
}

export default MainPageMenu;