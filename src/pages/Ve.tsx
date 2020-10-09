import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import InputTimVe from '../components/InputTimVe';
import ErrorKhongGhe from '../components/ErrorKhongGhe';
import FillterVe from '../components/FillterVe';
import DanhSachVe from '../components/DanhSachVe';
class Ve extends Component {
    render() {
        return (
            <div>
                <Sidebar></Sidebar>
                <div className="main-content" id="panel">
                    <NavbarDashboard></NavbarDashboard >
                    <div className="header bg-primary pb-6">
                        <div className="container-fluid">
                            <HeaderDashboard></HeaderDashboard>
                        </div>
                    </div>
                    <div className="container-fluid mt--6">
                        <InputTimVe></InputTimVe>
                        <div className="rowVe">
                            <FillterVe></FillterVe>
                            <DanhSachVe></DanhSachVe>
                        </div>
                        <FooterDashboard></FooterDashboard>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ve;