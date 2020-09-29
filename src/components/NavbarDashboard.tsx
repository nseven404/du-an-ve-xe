import React, { Component } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LaunchIcon from '@material-ui/icons/Launch';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HelpIcon from '@material-ui/icons/Help';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import EmailIcon from '@material-ui/icons/Email';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ReportIcon from '@material-ui/icons/Report';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StorefrontIcon from '@material-ui/icons/Storefront';

class NavbarDashboard extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            showNav: true,
            showNav1: true,
            showNav2: true
        }
    };
    onShowNav = () => {
        this.setState({ showNav: !this.state.showNav });
    };
    render() {
        return (
            <div className="main-content" id="panel">
                {/* Topnav */}
                <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Search form */}
                            <form className="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
                                <div className="form-group mb-0">
                                    <div className="input-group input-group-alternative input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                                        </div>
                                        <input className="form-control" placeholder="Tìm kiếm" type="text" />
                                    </div>
                                </div>
                                <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </form>
                            {/*  Navbar links */}
                            <ul className="navbar-nav align-items-center ml-md-auto" onClick={(event) => {

                                this.setState({ showNav2: !this.state.showNav2 });


                            }}>
                                <li className="nav-item d-xl-none">
                                    {/* Sidenav toggler */}
                                    <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                                        <div className="sidenav-toggler-inner">
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item d-sm-none">
                                    <a className="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
                                        <i className="ni ni-zoom-split-in"></i>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <NotificationsIcon />
                                    </a>
                                    <div className={this.state.showNav2 ? "dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden" : "dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden show"}>
                                        {/* Dropdown header */}
                                        <div className="px-3 py-3">
                                            <h6 className="text-sm text-muted m-0">Bạn có <strong className="text-primary">13</strong> thông báo.</h6>
                                        </div>
                                        {/* List group */}
                                        <div className="list-group list-group-flush">
                                            <a href="#!" className="list-group-item list-group-item-action">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        {/* Avatar */}
                                                        <img alt="Image placeholder" src="/images/huynhvannam.jpg" className="avatar rounded-circle" />
                                                    </div>
                                                    <div className="col ml--2">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h4 className="mb-0 text-sm">Huỳnh Văn Nam</h4>
                                                            </div>
                                                            <div className="text-right text-muted">
                                                                <small>2 giờ trước</small>
                                                            </div>
                                                        </div>
                                                        <p className="text-sm mb-0">Tôi muốn gặp bạn?</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#!" className="list-group-item list-group-item-action">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        {/* Avatar */}
                                                        <img alt="Image placeholder" src="/images/huynhvannam.jpg" className="avatar rounded-circle" />
                                                    </div>
                                                    <div className="col ml--2">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h4 className="mb-0 text-sm">Huỳnh Văn Nam</h4>
                                                            </div>
                                                            <div className="text-right text-muted">
                                                                <small>3 giờ trước</small>
                                                            </div>
                                                        </div>
                                                        <p className="text-sm mb-0">Tôi muốn gặp bạn?</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#!" className="list-group-item list-group-item-action">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        {/* Avatar */}
                                                        <img alt="Image placeholder" src="/images/huynhvannam.jpg" className="avatar rounded-circle" />
                                                    </div>
                                                    <div className="col ml--2">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h4 className="mb-0 text-sm">Huỳnh Văn Nam</h4>
                                                            </div>
                                                            <div className="text-right text-muted">
                                                                <small>5 giờ trước</small>
                                                            </div>
                                                        </div>
                                                        <p className="text-sm mb-0">Tôi muốn gặp bạn?</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#!" className="list-group-item list-group-item-action">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        {/* Avatar */}
                                                        <img alt="Image placeholder" src="/images/huynhvannam.jpg" className="avatar rounded-circle" />
                                                    </div>
                                                    <div className="col ml--2">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h4 className="mb-0 text-sm">Huỳnh Văn Nam</h4>
                                                            </div>
                                                            <div className="text-right text-muted">
                                                                <small>2 giờ trước</small>
                                                            </div>
                                                        </div>
                                                        <p className="text-sm mb-0">Tôi muốn gặp bạn?</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#!" className="list-group-item list-group-item-action">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        {/* Avatar */}
                                                        <img alt="Image placeholder" src="/images/huynhvannam.jpg" className="avatar rounded-circle" />
                                                    </div>
                                                    <div className="col ml--2">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h4 className="mb-0 text-sm">Huỳnh Văn Nam</h4>
                                                            </div>
                                                            <div className="text-right text-muted">
                                                                <small>3 giờ trước </small>
                                                            </div>
                                                        </div>
                                                        <p className="text-sm mb-0">Tôi muốn gặp bạn?</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        {/* View all */}
                                        <a href="#!" className="dropdown-item text-center text-primary font-weight-bold py-3">Xem tất cả</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown" onClick={(event) => {

                                    this.setState({ showNav1: !this.state.showNav1 });

                                }}>
                                    <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <LaunchIcon />
                                    </a>
                                    <div className={this.state.showNav1 ? "dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right" : "dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right show"}>
                                        <div className="row shortcuts px-4">
                                            <a href="#!" className="col-4 shortcut-item">
                                                <span className="shortcut-media avatar rounded-circle bg-gradient-red">
                                                    <EventNoteIcon/>
                                                </span>
                                                <small>Lịch</small>
                                            </a>
                                            <a href="#!" className="col-4 shortcut-item">
                                                <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
                                                    <EmailIcon/>
                                                </span>
                                                <small>Email</small>
                                            </a>
                                            <a href="#!" className="col-4 shortcut-item">
                                                <span className="shortcut-media avatar rounded-circle bg-gradient-info">
                                                    <CreditCardIcon/>
                                                </span>
                                                <small>Thanh toán</small>
                                            </a>
                                            <a href="#!" className="col-4 shortcut-item">
                                                <span className="shortcut-media avatar rounded-circle bg-gradient-green">
                                                    <ReportIcon/>
                                                </span>
                                                <small>Báo cáo</small>
                                            </a>
                                            <a href="#!" className="col-4 shortcut-item">
                                                <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
                                                    <LocationOnIcon/>
                                                </span>
                                                <small>Bản đồ</small>
                                            </a>
                                            <a href="#!" className="col-4 shortcut-item">
                                                <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
                                                    <StorefrontIcon/>
                                                </span>
                                                <small>Shop</small>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-center ml-auto ml-md-0"
                                onClick={(event) => {
                                    this.onShowNav();
                                }}
                            >
                                <li className="nav-item dropdown">
                                    <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="media align-items-center">
                                            <span className="avatar avatar-sm rounded-circle">
                                                <img alt="Image placeholder" src="/images/huynhvannam.jpg" />
                                            </span>
                                            <div className="media-body ml-2 d-none d-lg-block">
                                                <span className="mb-0 text-sm  font-weight-bold">Huỳnh Văn Nam</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className={(this.state.showNav) ? "dropdown-menu dropdown-menu-right" : "dropdown-menu dropdown-menu-right show"}>
                                        <div className="dropdown-header noti-title">
                                            <h6 className="text-overflow m-0">Xin chào!</h6>
                                        </div>
                                        <a href="#!" className="dropdown-item">
                                            <PersonIcon style={{ fontSize: "20px" }} />
                                            <span>Thông tin của tôi</span>
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            <SettingsIcon style={{ fontSize: "20px" }} />
                                            <span>Cài đặt</span>
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            <EventNoteIcon style={{ fontSize: "20px" }} />
                                            <span>Hoạt động</span>
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            <HelpIcon style={{ fontSize: "20px" }} />
                                            <span>Hỗ trợ</span>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a href="#!" className="dropdown-item">
                                            <DirectionsRunIcon style={{ fontSize: "20px" }} />
                                            <span>Đăng xuất</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

type Props = {}
type State = {
    showNav: boolean,
    showNav1: boolean,
    showNav2: boolean
}

export default NavbarDashboard;