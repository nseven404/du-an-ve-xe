import React, { Component } from 'react';
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import ReactBSAlert from "react-bootstrap-sweetalert";
import Button from 'react-bootstrap/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ImageIcon from '@material-ui/icons/Image';
import FaceIcon from '@material-ui/icons/Face';
import PhoneIcon from '@material-ui/icons/Phone';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AddIcon from '@material-ui/icons/Add';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

class TableKhachHang extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            formModal: true,
            alert: true
        }
    }

    showModal = () => {
        this.setState({ formModal: !this.state.formModal });
        if (!document.body.classList.contains("body")) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }

    hideModal = () => {
        this.setState({ formModal: this.state.formModal })
    };

    hideAlert = () => {
        this.setState({
            alert: !this.state.alert, formModal: true
        });
    };

    // Thông báo thành công
    successAlert = () => {
        this.setState({
            alert: <ReactBSAlert
                success
                style={{ display: "block", marginTop: "110px" }}
                title="Thành Công"
                onConfirm={() => this.hideAlert()}
                onCancel={() => this.hideAlert()}
                confirmBtnBsStyle="success"
                confirmBtnText="Ok"
                btnSize=""
            >
                Thêm nhân viên thành công ...
        </ReactBSAlert>
        });
    };

    // Thông báo cảnh báo
    warningAlert = () => {
        this.setState({
            alert: (
                <ReactBSAlert
                    warning
                    style={{ display: "block", marginTop: "110px" }}
                    title="Cảnh báo"
                    onConfirm={() => this.hideAlert()}
                    onCancel={() => this.hideAlert()}
                    confirmBtnBsStyle="warning"
                    confirmBtnText="Ok"
                    btnSize=""
                >
                    Cảnh báo ...
                </ReactBSAlert>
            )
        });
    };


    render() {
        return (
            <> {this.state.alert}
                <div className="card">
                    {/* Card header */}
                    <div className="card-header border-0">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="mb-0">Danh sách khách hàng</h3>
                            </div>

                            <div className="col-6 text-right">
                                <button onClick={this.showModal} className="btn btn-sm btn-primary btn-round btn-icon" data-toggle="tooltip" data-original-title="Edit product" >
                                    <span className="btn-inner--icon"><AddIcon /></span>
                                    <span className="btn-inner--text">Thêm</span>
                                </button>

                                <div className={this.state.formModal ? "modal fade hidden-dialog" : "modal fade show show-dialog"} id="modal-form" tabIndex={-1} role="dialog" aria-labelledby="modal-form" aria-hidden="true" aria-modal="true" onClick={this.hideModal}>
                                    <div className="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                                        <div className="modal-content">
                                            <div className="modal-body p-0">
                                                <div className="card bg-secondary border-0 mb-0">
                                                    <div className="card-body px-lg-5 py-lg-5">
                                                        <div className="text-center text-muted mb-4">
                                                            <small>Thêm khách hàng</small>
                                                        </div>
                                                        <form role="form">
                                                            <div className="form-group mb-3">
                                                                <label className="float-left text-red" style={{ fontSize: "10px" }}>(*)Ảnh khách hàng</label>
                                                                <div className="input-group input-group-merge input-group-alternative">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text"><ImageIcon /></span>
                                                                    </div>
                                                                    <input className="form-control" placeholder="Ảnh khách hàng" type="url" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="float-left text-red" style={{ fontSize: "10px" }}>(*)Tên khách hàng</label>
                                                                <div className="input-group input-group-merge input-group-alternative">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text"><FaceIcon /></span>
                                                                    </div>
                                                                    <input className="form-control" placeholder="Tên khách hàng" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="float-left text-red" style={{ fontSize: "10px" }}>(*)Ngày sinh</label>
                                                                <div className="input-group input-group-merge input-group-alternative">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text"><CalendarTodayIcon /></span>
                                                                    </div>
                                                                    <input className="form-control" type="date" id="example-date-input" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="float-left text-red" style={{ fontSize: "10px" }}>(*)Số điện thoại</label>
                                                                <div className="input-group input-group-merge input-group-alternative">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text"><PhoneIcon /></span>
                                                                    </div>
                                                                    <input className="form-control" placeholder="Số điện thoại" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="float-left text-red" style={{ fontSize: "10px" }}>(*)Email</label>
                                                                <div className="input-group input-group-merge input-group-alternative">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text"><AlternateEmailIcon /></span>
                                                                    </div>
                                                                    <input className="form-control" placeholder="Email" type="email" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="float-left text-red" style={{ fontSize: "10px" }}>(*)CMND</label>
                                                                <div className="input-group input-group-merge input-group-alternative">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text"><BrandingWatermarkIcon /></span>
                                                                    </div>
                                                                    <input className="form-control" placeholder="CMND" type="text" />
                                                                </div>
                                                            </div>

                                                            <div className="form-group">
                                                                <div className="input-group input-group-merge input-group-alternative">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text"><RecentActorsIcon /></span>
                                                                    </div>
                                                                    <select className="form-control" id="exampleFormControlSelect2">
                                                                        <option>Trưởng phòng</option>
                                                                        <option>Nhân viên</option>
                                                                        <option>Bảo vệ</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div onClick={this.hideModal} className="text-center">
                                                                <Button color="success" onClick={this.successAlert}>Thêm</Button>
                                                                <Button color="warning" className="btn-warning" onClick={this.warningAlert}>Hủy</Button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-sm btn-primary btn-round btn-icon" data-toggle="tooltip" data-original-title="Edit product">
                                    <span className="btn-inner--icon"><ImportExportIcon /></span>
                                    <span className="btn-inner--text">Export</span>
                                </a>
                                <div className="form-group row float-right">
                                    <div className="col-md-auto">
                                        <input className="form-control form-control-default" type="search" placeholder="Tìm kiếm" id="example-search-input" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Light table */}
                    <div className="table-responsive">
                        <table className="table align-items-center table-flush table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col" className="sort" data-sort="name">Ảnh & Tên</th>
                                    <th scope="col" className="sort" data-sort="gender">Giới tính</th>
                                    <th scope="col" className="sort" data-sort="birthday">Ngày sinh</th>
                                    <th scope="col" className="sort" data-sort="address">Địa chỉ</th>
                                    <th scope="col" className="sort" data-sort="numberphone">Số điện thoại</th>
                                    <th scope="col" className="sort" data-sort="email">Email</th>
                                    <th scope="col" className="sort" data-sort="cmnd">CMND</th>
                                    <th scope="col" className="sort" data-sort="action">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td className="table-user">
                                        <img src="/images/huynhvannam.jpg" className="avatar rounded-circle mr-3" />
                                        <b>Huỳnh Văn Nam</b>
                                    </td>
                                    <td>
                                        <span className="text-muted">Nam</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">10/09/2018</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">Buôn Mê Thuột</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">0369229494</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">admin@gmail.com</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">123456789</span>
                                    </td>

                                    <td className="table-actions">
                                        <a href="#!" className="table-action" data-toggle="tooltip" data-original-title="Edit product">
                                            <EditIcon />
                                        </a>
                                        <a href="#!" className="table-action table-action-delete" data-toggle="tooltip" data-original-title="Delete product">
                                            <DeleteIcon />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-user">
                                        <img src="/images/huynhvannam.jpg" className="avatar rounded-circle mr-3" />
                                        <b>Huỳnh Văn Nam</b>
                                    </td>
                                    <td>
                                        <span className="text-muted">Nam</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">08/09/2018</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">Buôn Mê Thuột</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">0369229494</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">admin@gmail.com</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">123456789</span>
                                    </td>
                                    <td className="table-actions">
                                        <a href="#!" className="table-action" data-toggle="tooltip" data-original-title="Edit product">
                                            <EditIcon />
                                        </a>
                                        <a href="#!" className="table-action table-action-delete" data-toggle="tooltip" data-original-title="Delete product">
                                            <DeleteIcon />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-user">
                                        <img src="/images/huynhvannam.jpg" className="avatar rounded-circle mr-3" />
                                        <b>Huỳnh Văn Nam</b>
                                    </td>
                                    <td>
                                        <span className="text-muted">Nam</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">30/08/2018</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">Buôn Mê Thuột</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">0369229494</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">admin@gmail.com</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">123456789</span>
                                    </td>
                                    <td className="table-actions">
                                        <a href="#!" className="table-action" data-toggle="tooltip" data-original-title="Edit product">
                                            <EditIcon />
                                        </a>
                                        <a href="#!" className="table-action table-action-delete" data-toggle="tooltip" data-original-title="Delete product">
                                            <DeleteIcon />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-user">
                                        <img src="/images/huynhvannam.jpg" className="avatar rounded-circle mr-3" />
                                        <b>Huỳnh Văn Nam</b>
                                    </td>
                                    <td>
                                        <span className="text-muted">Nam</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">10/09/2018</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">Buôn Mê Thuột</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">0369229494</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">admin@gmail.com</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">123456789</span>
                                    </td>
                                    <td className="table-actions">
                                        <a href="#!" className="table-action" data-toggle="tooltip" data-original-title="Edit product">
                                            <EditIcon />
                                        </a>
                                        <a href="#!" className="table-action table-action-delete" data-toggle="tooltip" data-original-title="Delete product">
                                            <DeleteIcon />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-user">
                                        <img src="/images/huynhvannam.jpg" className="avatar rounded-circle mr-3" />
                                        <b>Huỳnh Văn Nam</b>
                                    </td>
                                    <td>
                                        <span className="text-muted">Nam</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">10/09/2018</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">Buôn Mê Thuột</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">0369229494</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">admin@gmail.com</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">123456789</span>
                                    </td>
                                    <td className="table-actions">
                                        <a href="#!" className="table-action" data-toggle="tooltip" data-original-title="Edit product">
                                            <EditIcon />
                                        </a>
                                        <a href="#!" className="table-action table-action-delete" data-toggle="tooltip" data-original-title="Delete product">
                                            <DeleteIcon />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*  Card footer */}
                    <div className="card-footer py-4">
                        <nav aria-label="...">
                            <ul className="pagination justify-content-end mb-0">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex={-1}>
                                        <KeyboardArrowLeftIcon />
                                        <span className="sr-only">Trước</span>
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">4</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">5 <span className="sr-only">(hiện tại)</span></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <KeyboardArrowRightIcon />
                                        <span className="sr-only">Kế tiếp</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        );
    }
}

type Props = {

};

type State = {
    formModal: boolean,
    alert: any
}

export default TableKhachHang;