import React, { Component } from 'react';
import './containerImagePost_css.css';

class ContainerImagePost extends Component {
    render() {
        return (
            <div className="container-fluid mycontainer" style={{ paddingTop: "100px" }}>
                <div className="offset-3" style={{ width: "200px", height: "200px" }}>
                    <div className="alert alert-warning" role="alert">
                        <h1>Tin Tức</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContainerImagePost;