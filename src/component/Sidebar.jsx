import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">

                </div>
                <ul className="list-unstyled components" style={{ border: "none" }}>
                    {this.props.active === "post" ? <li className="active">
                        <a href="/managePost"><i className="fa fa-home" />Manage Posts</a>
                    </li> : <li>
                            <a href="/managePost"><i className="fa fa-home" />Manage Posts</a>
                        </li>}

                    {this.props.active === "product" ? <li className="active">
                        <a href="/manageProducts?page=0"><i className="fa fa-home" />Manage Products</a>
                    </li> : <li>
                            <a href="/manageProducts?page=0"><i className="fa fa-home" />Manage Products</a>
                        </li>}
                        
                    {this.props.active === "bill" ? <li className="active">
                            <a href="/manageBills"><i className="fa fa-home" />Manage Bills</a>
                        </li> : <li>
                                <a href="/manageBills"><i className="fa fa-home" />Manage Bills</a>
                            </li>}
                </ul>
            </nav>
        );
    }
}

export default Sidebar;