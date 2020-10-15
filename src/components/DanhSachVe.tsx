
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HorizontalLinearStepper from '../components/StepperVe';
import StepperVe from '../components/StepperVe';
import AddGhe from './AddGhe';
import DanhSachGheDat from './DanhSachGheDat';
import Button from 'react-bootstrap/Button';
import NhapThongTinVe from './NhapThongTinVe';

class DanhSachVe extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            formModal: true,
            formModal2: true
        }
    }

    showModal = () => {
        this.setState({ formModal: false });
        if (!document.body.classList.contains("body")) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }

    showModal2 = () => {
        this.setState({ formModal2: false });

    }

    hideModal = () => {
        this.setState({ formModal: this.state.formModal })
    };


    render() {
        return (
            <div>
                <div className="khungThongTinVe mt-4">
                    <div className="containerKhung">
                        <div className="thongTinChung">
                            <div className="khungAnhXe">
                                <img className="imageXe" src="https://static.vexere.com/production/images/1588992988116.jpeg" alt="race" />
                            </div>
                            <div className="khungThongTinXe">
                                <div className="khungTitleXe">
                                    <div className="bus-info">
                                        <div className="bus-name">
                                            Xe FPT Poly
                                        </div>
                                    </div>
                                    <div className="seat-type">
                                        Giường nằm 38 chỗ
                                    </div>
                                    <div className="from-to">
                                        <svg className="iconTienTrinh" xmlns="http://www.w3.org/2000/svg" width="14" height="74" viewBox="0 0 14 74"><path fill="none" stroke="#787878" stroke-linecap="round" stroke-width="2" stroke-dasharray="0 7" d="M7 13.5v46"></path><g fill="none" stroke="#484848" stroke-width="3"><circle cx="7" cy="7" r="7" stroke="none"></circle><circle cx="7" cy="7" r="5.5"></circle></g><path d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z" fill="#787878"></path></svg>
                                        <div className="from-to-content">
                                            <div className="content from">
                                                <div className="hour">20:45
                                                </div>
                                                <div className="place">• Bến xe Buôn Mê Thuột
                                                </div>
                                            </div>
                                            <div className="duration">6h30m
                                            </div>
                                            <div className="content to">
                                                <div className="hour">03:15
                                                </div>
                                                <div className="place">• Hồ Chí Minh
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="giaTien">
                                    <div className="fare">
                                        <div className="small">
                                        </div>
                                        <div className="">
                                            230,000 đ
                                        </div>
                                    </div>
                                </div>
                                <div className="khungChoTrong">
                                    <div className="info">
                                        <div className="choTrong">
                                            38 chỗ trống
                                        </div>
                                        <div className="action">
                                            <button type="button" className="btn btn-success" onClick={this.showModal}>Đặt vé</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="full-trip">
                            <span>*</span>
                        Vé chặng thuộc chuyến 16:45 17-10-2020 Yên Bái - Móng Cái
                        </div>
                    </div>

                    {/* <div id="step">
                        <HorizontalLinearStepper></HorizontalLinearStepper>
                    </div> */}
                    <div className={this.state.formModal ? "modal fade hidden-dialog" : "modal fade show show-dialog"} id="modal-form" tabIndex={-1} role="dialog" aria-labelledby="modal-form" aria-hidden="true" aria-modal="true" onClick={this.hideModal}>
                        <div className="modal-dialog modal- modal-dialog-centered modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <div className="card bg-secondary border-0 mb-0">
                                        <div className="card-body">
                                            <div className="card">
                                                {/* Card header */}
                                                <div className="card-header border-0">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <h3 className="mb-0">Danh sách ghế</h3>
                                                        </div>

                                                        <div className="col-12 text-center mt-4">
                                                            <span>Chú thích:</span>
                                                            <svg className="ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                            <span className="ml-3">Còn trống</span>
                                                            <svg className="ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 28 44"><g fill="gray" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                            <span className="ml-3">Đã đặt</span>
                                                            <svg className="ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 28 44"><g fill="#5e72e4" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                            <span className="ml-3">Đang chọn</span>
                                                        </div>
                                                        <div className="tangGhe">

                                                            <div className="tang">
                                                                <div className="text-center text-gray-dark">
                                                                    <span>Tầng 1</span>
                                                                </div>
                                                                <div className="danhSachGhe">
                                                                    <div className="ghe">
                                                                        <img alt="" width="40" color="white" src="/images/car-steering-wheel.svg" />
                                                                    </div>
                                                                    <div className={this.state.formModal2 ? "modal fade hidden-dialog" : "modal fade show show-dialog"} id="modal-form" tabIndex={-1} role="dialog" aria-labelledby="modal-form" aria-hidden="true" aria-modal="true">
                                                                        <div className="modal-dialog modal- modal-dialog-centered modal-xl" role="document">
                                                                            <div className="modal-content">
                                                                                <div className="modal-body p-0">
                                                                                    <div className="card bg-secondary border-0 mb-0">
                                                                                        <div className="card-body">
                                                                                            <NhapThongTinVe/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="danhSachGhe">
                                                                    <div className="ghe" onClick={this.showModal2}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                                    </div>
                                                                    <div className="ghe" onClick={this.showModal2}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                                    </div>
                                                                    <div className="ghe" onClick={this.showModal2}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                                    </div>
                                                                </div>
                                                                <div className="danhSachGhe">
                                                                    <div className="ghe" onClick={this.showModal2}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                                    </div>

                                                                    <div className="ghe" onClick={this.showModal2}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                                    </div>
                                                                    <div className="ghe" onClick={this.showModal2}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                                    </div>
                                                                    <div className="ghe" onClick={this.showModal2}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                                    </div>
                                                                    <div className="ghe" onClick={this.showModal2}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="tang">
                                                                <div className="text-center text-gray-dark">
                                                                    <span>Tầng 2</span>
                                                                </div>
                                                                <div className="danhSachGhe">

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button color="warning" className="btn-warning float-right" onClick={this.hideModal}>Hủy</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="khungThongTinVe mt-4">
                    <div className="containerKhung">

                    </div>
                </div>
                <div className="khungThongTinVe mt-4">
                    <div className="containerKhung">

                    </div>
                </div>
                <div className="khungThongTinVe mt-4">
                    <div className="containerKhung">

                    </div>
                </div>
            </div>


        );
    }
}

type Props = {

};

type State = {
    formModal: boolean,
    formModal2: boolean
}

export default DanhSachVe;