import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

class AddGhe extends Component {
    render() {
        return (
            <div className="card">
                {/* Card header */}
                <div className="card-header border-0">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="mb-0">Danh sách ghế</h3>
                        </div>

                        <div className="col-6 text-right">
                            <button className="btn btn-sm btn-primary btn-round btn-icon" data-toggle="tooltip" data-original-title="Edit product" >
                                <span className="btn-inner--icon"><AddIcon /></span>
                                <span className="btn-inner--text">Thêm tầng</span>
                            </button>

                            <button className="btn btn-sm btn-primary btn-round btn-icon" data-toggle="tooltip" data-original-title="Edit product" >
                                <span className="btn-inner--icon"><DeleteIcon /></span>
                                <span className="btn-inner--text">Xóa tầng</span>
                            </button>
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
                                <div className="text-center">
                                    <span>Tầng 1</span>
                                </div>
                                <div className="danhSachGhe">
                                    <div className="ghe">
                                        <img alt="" width="40" color="white" src="/images/car-steering-wheel.svg" />
                                    </div>
                                </div>
                                <div className="danhSachGhe">
                                    <div className="ghe">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                    </div>

                                    <div className="ghe">
                                        <button>+</button>
                                    </div>
                                    <div className="ghe">
                                        <button>+</button>
                                    </div>
                                    <div className="ghe">
                                        <button>+</button>
                                    </div>
                                    <div className="ghe">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                    </div>
                                </div>
                                <div className="danhSachGhe">
                                <div className="ghe">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                    </div>
                                    <div className="ghe">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                    </div>
                                    <div className="ghe">
                                        <button>+</button>
                                    </div>
                                    <div className="ghe">
                                        <button>+</button>
                                    </div>
                                    <div className="ghe">
                                        <button>+</button>
                                    </div>
                                </div>
                                <div className="danhSachGhe">
                                    <button>Thêm hàng</button>
                                </div>

                            </div>
                            <div className="tang">
                                <div className="text-center">
                                    <span>Tầng 2</span>
                                </div>
                                <div className="danhSachGhe">

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddGhe;