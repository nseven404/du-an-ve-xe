import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
class NhapThongTinVe extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            phone: ""
        }
    }
    handleOnChange = (value: any) => {
        console.log(value);
        this.setState({ phone: value }, () => {
            console.log(this.state.phone);
        });
    };
    render() {
        return (
            <div>
                <div className="khungDatVe">
                    <div className="khung">
                        <h3 className="text-center">THÔNG TIN GHẾ</h3>
                        <div>
                            Ghế: &nbsp;
                            <div className="footer-total">
                                B1
                            </div>
                        </div>
                        <div>
                            Giá tiền: &nbsp;
                            <div className="footer-total">
                                200000
                            </div>
                        </div>
                        <div>
                            Điểm đón: &nbsp;
                            <div className="footer-total">
                                Hà Nội
                            </div>
                        </div>
                        <div>
                            Điểm trả: &nbsp;
                            <div className="footer-total">
                                Đắk Lắk
                            </div>
                        </div>
                    </div>
                    <div className="khung">
                        <h3 className="text-center">NHẬP THÔNG TIN KHÁCH HÀNG</h3>
                        <div className="thongTin">
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="exampleFormControlInput1">Họ tên
                            <span></span>
                                </label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Huỳnh Văn A" />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="exampleFormControlInput1">Số điện thoại
                            <span></span>
                                </label>
                                <ReactPhoneInput
                                    country={'vn'}
                                    value={this.state.phone}
                                    onChange={this.handleOnChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="exampleFormControlInput1">Email
                            <span></span>
                                </label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email@gmail.com" />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="exampleFormControlSelect1">Tình trạng
                                <span></span>
                                </label>
                                
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Đã trả tiền</option>
                                    <option>Chưa trả tiền</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="exampleFormControlInput1">Ghi chú</label>
                                <textarea className="form-control" placeholder="Các yêu cầu đặc biệt không thể được đảm bảo - nhưng nhà xe sẽ cố gắng hết sức để đáp ứng nhu cầu của bạn." />
                            </div>
                            <div style={{ fontSize: 14 }} className="form-group">
                                <span>Bằng việc bấm nút Đặt chỗ, bạn đã đồng ý với </span>
                                <a href="#" target="_blank">Chính sách bảo mật thông tin </a>và
                    <a href="#" target="_blank"> Quy chế</a>
                                <span>  của NhaXe.Com</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="khungButton">
                    <Button color="success" className="btn-success" >Thêm</Button>
                    <Button color="warning" className="btn-warning float-right">Hủy</Button>
                </div>
            </div>
        );
    }
}

type Props = {

}

type State = {
    phone: string
}

export default NhapThongTinVe;