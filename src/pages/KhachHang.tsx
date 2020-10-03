import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import TableKhachHang from '../components/TableKhachHang';

class KhachHang extends Component {
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
                        <TableKhachHang></TableKhachHang>
                        <FooterDashboard></FooterDashboard>
                    </div>
                </div>
            </div >
        );
    }
}

export default KhachHang;