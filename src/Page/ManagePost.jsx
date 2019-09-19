import React, { Component } from 'react';
import Sidebar from '../component/Sidebar';
import Content from '../component/AdminArea';
class ManagePost extends Component {
    render() {
        return (
            <div className="row">
                <Sidebar active = "post"/>
                <Content />
            </div>
        );
    }
}

export default ManagePost;