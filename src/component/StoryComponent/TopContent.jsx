import React, { Component } from 'react';

class TopContent extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ margin:"0",paddingTop: "150px", height: "500px", width: "100%", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: "url('img/Story/paper.jpg')" }}>
                <div>
                    <h1>Mình Cà Phê Nhé</h1>
                    <div>
                        <p style={{ color: "black" }}><b>
                            Cà phê nhé" - Một lời hẹn rất riêng của người Việt.
                            Một lời ngỏ mộc mạc để mình ngồi lại bên nhau và sẻ chia câu chuyện của riêng mình
                            </b>
                        </p>
                        <p style={{ color: "black" }}><b>
                            Tại The Coffee House, chúng tôi luôn trân trọng những câu chuyện và đề cao giá trị Kết nối con người. 
                            Chúng tôi mong muốn The Coffee House
                            <br/>sẽ trở thành “Nhà Cà Phê",
                            nơi mọi người xích lại gần nhau và tìm thấy niềm vui,
                             sự sẻ chia thân tình bên những tách cà phê đượm hương, chất lượng.
                            </b>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopContent;