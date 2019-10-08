import React, { Component } from 'react';
import './mycss.css'
class MiddleContent extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ padding: "20px" }}>
                <div className="content-top mb-10" style={{ marginBottom: "30px" }}>
                    <h1 className="text-center" style={{ color: "orange" }}>3 GIÁ TRỊ LÀM NÊN THE COFFEE HOUSE</h1>
                </div>
                <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="box-1 offset-1">

                    </div>
                    <div className="box-2">
                        <h3>TRAO GỬI HẠNH PHÚC</h3>
                        <p>
                            Mọi quyết định và hành động ở The Coffee House đều bắt đầu từ sứ mệnh “Deliver Happiness” - Trao gửi hạnh phúc. Từ niềm vui cho nhân viên đến sự hài lòng của khách hàng
                            , chúng tôi tin rằng tất cả mọi người đều có thể đóng góp thêm những việc làm tốt đẹp cho cộng đồng. Hạnh phúc được tạo ra và lan tỏa,
                             với The Coffee House, mới là hạnh phúc trọn vẹn.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="box-3 offset-1">
                        <h3>CHẤT LƯỢNG CÀ PHÊ TUYỆT HẢO</h3>
                        <p>
                            Chúng tôi muốn tạo ra dấu ấn khác biệt cho cà phê Việt Nam bằng sự tử tế và cẩn trọng.
                             Chúng tôi ươm mầm, chăm dưỡng kỹ lưỡng cây cà phê dưới các chuẩn mực khắt khe để đưa ra thị trường những thành phẩm
                            tuyệt vời nhất.
                             Chúng tôi muốn góp phần tạo nên những thay đổi bền vững cho ngành cà phê Việt Nam.
                         </p>
                        <h3>TRÂN TRỌNG CON NGƯỜI</h3>
                        <p>The Coffee House không chỉ là một công ty hoạt động trong ngành F&B (Food & Beverage - Ăn Uống), chúng tôi là một thương hiệu về con người.
                            Tại The Coffee House, chúng tôi không đi tìm thứ cà phê đặc sản mà tìm những người làm cà phê trở nên đặc biệt.
                            Chúng tôi cùng nhau làm việc cần mẫn và chung sức cho những mục tiêu lớn, nhưng vẫn chăm chút đến từng chi tiết nhỏ. Cùng nhau bình tĩnh vượt qua các thách thức và vươn đến sự hoàn hảo,
                            chúng tôi tin rằng mỗi người đều có một câu chuyện, biệt tài, tiềm năng...
                            nên luôn cổ vũ cho từng cá nhân kiên trì đi đến tận cùng của ước mơ của mình.
                        </p>
                    </div>
                    <div className="box-4">

                    </div>
                </div>

            </div>
        );
    }
}

export default MiddleContent;