import React, { Component } from 'react';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import MainDashboard from '../components/MainDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';

class Dashboard extends Component {
    render() {
        return (
            <div >
                <Sidebar></Sidebar>
                <NavbarDashboard></NavbarDashboard>
                <HeaderDashboard></HeaderDashboard>
                <div className="container-fluid mt--6">
                    <MainDashboard></MainDashboard>
                    <FooterDashboard></FooterDashboard>
                </div>

            </div>
        );
    }
}

export default Dashboard;