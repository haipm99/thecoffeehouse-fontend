import React, { Component } from 'react';


//import axios
import axios from 'axios';
class BillComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bills: [],
            currentBill: {}
        };
    }
    componentDidMount = () => {
        this.GetAllBill();
    }
    GetAllBill = () => {
        var config = {
            method: "get",
            url: "https://localhost:44372/api/Buying/GetAllInvoice"
        }
        return axios(config).then(res => {
            if (res.status === 200 && res.data !== null) {
                this.setState({
                    bills: res.data
                });
            }
        })
    }

    GetCurrentBill = (id) => {
        this.state.bills.forEach(item => {
            if (item.id === id) {
                this.setState({
                    currentBill: item
                });
                return;
            }
        })
    }

    render() {
        const elm = this.state.bills !== [] ? this.state.bills.map((item, index) => {
            var a = (new URLSearchParams(window.location.search));
            if (index >= (3 * (a.toString().split("=")[1])) && index <= (3 * (a.toString().split("=")[1])) + 2) {
                return (
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.total}</td>
                        <td><button onClick={this.GetCurrentBill.bind(this, item.id)} data-toggle="modal" data-target="#myModal" style={{ width: "100px", height: "50px" }} className="btn btn-success">Chi tiết</button></td>
                    </tr>
                );
            } else {
                return (null);
            }

        }) : null;
        const pagi = this.state.bills !== [] ? this.state.bills.map((item, index) => {
            if (index % 3 === 0) {
                return (
                    <li className="page-item">
                        <a className="page-link" href={`http://localhost:3000/manageBills?page=${index / 3}`}>{index / 3 + 1}</a>
                    </li>
                )
            }
            else {
                return (
                    null
                )
            }
        }) : null;
        return (
            <div style={{ left: "300px", position: "absolute", top: "5%" }}>
                <div className="container" style={{ margin: "none" }}>
                    <div className="card text-center" style={{ width: "1100px" }}>
                        <div className="card-header myCardHeader">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="text-left text-primary font-weight-bold">Bills</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-hover myTable">
                                <thead className="text-primary">
                                    <tr>
                                        <th>Ngày Mua</th>
                                        <th>Tổng tiền</th>
                                        <th>Chi tiết</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {elm}
                                </tbody>
                            </table>
                        </div>
                        {/* Footer */}
                        <div className="card-footer myCardFooter">
                            <nav>
                                <ul className="pagination justify-content-center">
                                    {pagi}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <header className="head-form mb-0">
                                <h2 id="header-title">Detail Bill</h2>
                            </header>
                            <form>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input name="title" className="form-control input-sm" Value={this.state.currentBill.date} readOnly />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <textarea style={{ height: "200px" }} readOnly className="form-control" name="content" value={this.state.currentBill.description} rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input readOnly name="title" className="form-control input-sm" Value={this.state.currentBill.total} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="modal-footer">
                                <button data-dismiss="modal" className="btn btn-warning">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BillComponent;