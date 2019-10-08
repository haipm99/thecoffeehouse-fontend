import React, { Component } from 'react';

class Sidebar extends Component {
    LogOut = () => {
        if (localStorage.getItem('token')) {
            localStorage.removeItem("token");
            window.location.href = "/";
        }
    }
    render() {

        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                </div>
                <ul className="list-unstyled components" style={{ border: "none" }}>
                    {this.props.active === "darsh" ? <li className="active">
                        <a href="/darshboard"><i className="fa fa-home" />Darshboard</a>
                    </li> : <li>
                            <a href="/darshboard"><i className="fa fa-home" />Darshboard</a>
                        </li>}
                    {this.props.active === "post" ? <li className="active">
                        <a href="/managePost"><i className="fa fa-clipboard" />Manage Posts</a>
                    </li> : <li>
                            <a href="/managePost"><i className="fa fa-clipboard" />Manage Posts</a>
                        </li>}

                    {this.props.active === "product" ? <li className="active">
                        <a href="/manageProducts?page=0"><i className="fa fa-gift" />Manage Products</a>
                    </li> : <li>
                            <a href="/manageProducts?page=0"><i className="fa fa-gift" />Manage Products</a>
                        </li>}

                    {this.props.active === "bill" ? <li className="active">
                        <a href="/manageBills?page=0"><i className="fa fa-wallet" />Manage Bills</a>
                    </li> : <li>
                            <a href="/manageBills?page=0"><i className="fa fa-wallet" />Manage Bills</a>
                        </li>}
                    <button className="btn btn-success w-100" onClick={this.LogOut}>Log out</button>

                </ul>
            </nav>
        );
    }
}

export default Sidebar;