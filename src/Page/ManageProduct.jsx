import React, { Component } from 'react';
import Sidebar from '../component/Sidebar';
import Content from '../component/ManageProduct';
class ManageProduct extends Component {
    render() {
        return (
            <div className="row">
                <Sidebar active="product"/>
                <Content/>
            </div>
        );
    }
}

export default ManageProduct;