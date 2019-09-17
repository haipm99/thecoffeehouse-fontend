import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    
                </div>
                <ul className="list-unstyled components" style={{border:"none"}}>
                    <li className="active">
                        <a href="/"><i className="fa fa-home" />Manage Posts</a>
                    </li>
                    <li>
                        <a href="/"><i className="fa fa-briefcase" />Manage Product</a>
                    </li>
                    <li>
                        <a href="/"><i className="fa fa-files-o" />Manage Bills</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;