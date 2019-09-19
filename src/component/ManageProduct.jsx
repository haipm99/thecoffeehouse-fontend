import React, { Component } from 'react';
//import axios
import axios from 'axios';
//import sweetalert
import Swal from 'sweetalert2';
class ManageProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            name: "",
            desc: "",
            img: "",
            price: 0,
            typeId: "",
            product: {},
        }
    }

    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onchange2 = (e) => {
        this.setState({
            typeId: e.target.value
        })
    }
    componentDidMount = () => {
        //alert()
        this.GetProductsFromDb();
    }
    GetProductsFromDb = () => {
        var config = {
            method: "get",
            url: "https://localhost:44372/api/Products/getAll"
        }

        return axios(config).then(res => {
            if (res.data != null) {
                this.setState({
                    products: res.data
                })
            }
        })
    }

    CreateProduct = (e) => {
        var img = this.state.img.split("\\");
        var length = img.length;
        e.preventDefault();
        var data = {
            "name": this.state.name,
            "description": this.state.desc,
            "img": img[length - 1],
            "price": this.state.price,
            "typeId": this.state.typeId
        };
        var config = {
            method: "post",
            url: "https://localhost:44372/api/Products/create",
            data: data
        };

        return axios(config).then(res => {
            if (res.status === 200 && res.data !== null) {
                Swal.fire("Add success.", "", "success").then(() => {
                    window.location.href = "/manageProducts"
                })
            }
        })
    }

    DeleteProduct = (id) => {
        var config = {
            method: "delete",
            url: `https://localhost:44372/api/Products/${id}`
        };

        return axios(config).then(res => {
            if (res.status === 200 && res.data !== null) {
                Swal.fire("Delete Success.", "", "success").then(() => {
                    this.GetProductsFromDb();
                })
            }
        })
    }

    SetModal = (model) => {
        this.setState({
            product: model
        });
    }

    UpdateProduct = (e) => {
        e.preventDefault();
        if (this.state.img === "") {
            var data = {
                "name": this.state.name,
                "description": this.state.product.description,
                "img": this.state.product.img,
                "price": this.state.price === 0 ? this.state.product.price : this.state.price,
                "typeId": this.state.product.type
            };
            var config = {
                method: "patch",
                url: `https://localhost:44372/api/Products/${this.state.product.id}`,
                data: data
            };
            return axios(config).then(res => {
                if (res.status === 200 && res.data !== null) {
                    Swal.fire("Update Success.", "", "success").then(() => {
                        window.location.href = "/manageProducts?page=0";
                    })
                }
            })
        }
        else {

            var img = this.state.img.split("\\");
            var length = img.length;
            e.preventDefault();
            var data2 = {
                "name": this.state.name === "" ? this.state.product.name : this.state.name,
                "description": this.state.product.description,
                "img": img[length - 1],
                "price": this.state.price === 0 ? this.state.product.price : this.state.price,
                "typeId": this.state.product.type
            };
            var config2 = {
                method: "patch",
                url: `https://localhost:44372/api/Products/${this.state.product.id}`,
                data: data2
            };
            return axios(config2).then(res => {
                if (res.status === 200 && res.data !== null) {
                    Swal.fire("Update Success.", "", "success").then(() => {
                        window.location.href = "/manageProducts?page=0";
                    })
                }
            })
        }
    }

    render() {
        const elm = this.state.products !== [] ? this.state.products.map((item, index) => {
            var a = (new URLSearchParams(window.location.search));
            if (index >= (3*(a.toString().split("=")[1])) && index <= (3*(a.toString().split("=")[1])) + 2) {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.typeId}</td>
                        <td>

                            <img alt="" style={{ width: "100px", height: "100px" }} src={`/img/products/${item.img}`} />
                        </td>
                        <td><button className="btn btn-primary w-100" data-toggle="modal" data-target="#myModal2"
                            onClick={this.SetModal.bind(this, item)}>Edit</button></td>
                        <td><button className="btn btn-warning w-100" onClick={this.DeleteProduct.bind(this, item.id)}>Delete</button></td>
                    </tr>
                );
            }
            else{
                return (null);
            }

        }) : null;
        const pagi = this.state.products !== [] ? this.state.products.map((item, index) => {
            if (index % 3 === 0) {
                return (
                    <li className="page-item">
                        <a className="page-link" href={`http://localhost:3000/manageProducts?page=${index /3}`}>{index / 3 + 1}</a>
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
                        {/* Header */}
                        <div className="card-header myCardHeader">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="text-left text-primary font-weight-bold">Products</h3>
                                </div>
                                <div className="col-md-6 text-right">
                                    <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Products</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-hover myTable">
                                <thead className="text-primary">
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Type</th>
                                        <th>Img</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
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
                                    <nav aria-label="...">
                                        <ul className="pagination pagination-sm">
                                            {pagi}
                                        </ul>
                                    </nav>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* modal 1 */}
                    <div className="modal fade" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <header className="head-form mb-0">
                                    <h2 id="header-title">Create Product</h2>
                                </header>
                                {/* Modal Header */}
                                {/* 	<div class="modal-header">
					<h4 class="modal-title" id="modal-title">Modal Heading</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div> */}
                                {/* Modal body */}
                                <form onSubmit={this.CreateProduct}>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="name" className="form-control input-sm" placeholder="Name" onChange={this.onchange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <textarea className="form-control" name="desc" placeholder="Description" rows="3" onChange={this.onchange}></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="file" name="img" className="form-control" placeholder="Image" onChange={this.onchange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" name="price" className="form-control" placeholder="Price" onChange={this.onchange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control" onChange={this.onchange2}>
                                                <option value="0">Choose Type</option>
                                                <option value="1">Cà Phê</option>
                                                <option value="2">Thức uống đá xoay</option>
                                                <option value="3">Trà trái cây</option>
                                                <option value="4">Macchiato</option>
                                                <option value="5">Thức ăn nhẹ</option>
                                                <option value="6">Khác</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Modal footer */}
                                    <div className="modal-footer" id="modal-footer">
                                        <button type="submit" className="btn btn-success">Add Post</button>
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* modal 2 */}
                    <div className="modal fade" id="myModal2">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <header className="head-form mb-0">
                                    <h2 id="header-title">Create Product</h2>
                                </header>
                                {/* Modal body */}
                                <form onSubmit={this.UpdateProduct}>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="name" className="form-control input-sm" defaultValue={this.state.product.name} onChange={this.onchange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <textarea className="form-control" name="desc" readOnly value={this.state.product.description} rows="3" onChange={this.onchange}></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="file" name="img" className="form-control" placeholder="Image" onChange={this.onchange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" name="price" className="form-control" defaultValue={this.state.product.price} onChange={this.onchange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control" onChange={this.onchange2} value={this.state.product.type} readOnly>
                                                <option value="0">Choose Type</option>
                                                <option value="1">Cà Phê</option>
                                                <option value="2">Thức uống đá xoay</option>
                                                <option value="3">Trà trái cây</option>
                                                <option value="4">Macchiato</option>
                                                <option value="5">Thức ăn nhẹ</option>
                                                <option value="6">Khác</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Modal footer */}
                                    <div className="modal-footer" id="modal-footer">
                                        <button type="submit" className="btn btn-success">Update Products</button>
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManageProduct;