import React, { Component } from 'react';


//import axios
import axios from 'axios';
class DarshComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bills: [],
            total: 0,
            drinks: 0,
            today:"",
        }
    }

    componentDidMount = async () => {
        await this.GetAllBill();
        this.GetDataForDash();
    }
    GetDataForDash = () => {
        var total = 0;
        var drinks = 0;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = mm+"/"+dd+"/"+yyyy;
        console.log(today);
        this.state.bills.forEach(elm => {
            if (elm.date === today) {
                total = elm.total + total;
                drinks = parseInt(elm.description.split(";")[1]) + drinks;
            }
        });
        this.setState({
            total: total,
            drinks: drinks,
            today:today
        })
    }

    GetAllBill = () => {
        var config = {
            method: "get",
            url: "https://localhost:44372/api/Buying/GetAllInvoice"
        };
        return axios(config).then(res => {
            if (res.status === 200 && res.data !== null) {
                this.setState({
                    bills: res.data
                });
            }
        })
    }

    render() {
        return (
            <div style={{ left: "300px", position: "absolute", top: "5%" }}>
                <div className="container" style={{ margin: "none" }}>
                    <div className="card text-center" style={{ width: "1100px" }}>
                        <div className="card-header myCardHeader">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="text-left text-primary font-weight-bold">DarshBoard</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="card col-4 p-0 mr-2">
                                    <div className="card-header text-white bg-success">Sales today</div>
                                    <div className="card-body">
                                        <p className="card-text"><i className="fas fa-coffee"></i> : {this.state.drinks} </p>
                                    </div>
                                </div>
                                <div className="card col-3 p-0 mr-2">
                                    <div className="card-header text-white bg-primary">Today</div>
                                    <div className="card-body">
                                        <p className="card-text"><i className="fas fa-calendar-day"></i> : {this.state.today} </p>
                                    </div>
                                </div>
                                <div className="card col-4 p-0 mr-1">
                                    <div className="card-header text-white bg-primary">Money today</div>
                                    <div className="card-body">
                                        <p className="card-text"><i className="fas fa-money-bill"></i> : {this.state.total} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="card-footer myCardFooter">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DarshComponent;