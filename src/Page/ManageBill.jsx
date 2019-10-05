import React, { Component } from 'react';

//import component
import Sidebar from '../component/Sidebar';
import Content from '../component/BillComponent';
class ManageBill extends Component {
    render() {
        return (
            <div>
                <Sidebar active="bill" />
                <Content />
            </div>
        );
    }
}
export default ManageBill;