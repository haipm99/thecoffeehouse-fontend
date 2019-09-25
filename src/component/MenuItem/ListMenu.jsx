import React, { Component } from 'react';

class ListMenu extends Component {
    render() {
        return (
            <div className="col-3 offset-1 pt-5" style={{ height: "auto" }}>
                <div className="card sticky-top" style={{ width: '18rem' }}>
                    <div className="card-header" style={{borderBottom:"2px solid orange"}}>
                        Menu
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cà Phê</li>
                        <li className="list-group-item">Trà và Machiato</li>
                        <li className="list-group-item">Thức Uống Đá Xoay</li>
                        <li className="list-group-item">Thức Uống Trái Cây</li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default ListMenu;