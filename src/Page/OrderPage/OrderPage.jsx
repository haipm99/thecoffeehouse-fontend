import React, { Component } from 'react';

//import component
import NavBar from '../../component/NavBar';
import ListItem from '../../component/MenuItem/ListMenu';
import Menu from '../../component/AllMenu/Menu';
import Cart from '../../component/Cart/MyCart';
class OrderPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="row" style={{marginTop:"74px"}}>
                    <ListItem />
                    <Menu />
                    <Cart />
                </div>
            </div>
        );
    }
}

export default OrderPage;