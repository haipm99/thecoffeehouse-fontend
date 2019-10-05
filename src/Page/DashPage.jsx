import React, { Component } from 'react';

import SideBar from '../component/Sidebar';
import Content from '../component/DarshComponent';
class DashPage extends Component {
    render() {
        return (
            <div>
                <SideBar active="darsh"/>
                <Content />
            </div>
        );
    }
}

export default DashPage;