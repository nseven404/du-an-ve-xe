import React, { Component } from 'react';

class DanhSachVe extends Component {
    render() {
        return (
            <div className="columnVe mt-4">
                <div>
                    <h3>Vé xe từ Hà Nội đi Quảng Ninh: 1976 chuyến</h3>
                </div>
                <div className="sort">
                    <span>Sắp xếp theo:</span>
                    <div className="groupButton">
                        <button type="button" className="btn btn-sm btn-outline-primary">
                            <span>Giờ sớm nhất</span>
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                            <span>Muộn nhất</span>
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                            <span>Giá thấp nhất</span>
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                            <span>Giá cao nhất</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DanhSachVe;