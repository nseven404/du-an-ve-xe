import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Link } from 'react-router-dom';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import CommuteIcon from '@material-ui/icons/Commute';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EventSeatIcon from '@material-ui/icons/EventSeat';

class Sidebar extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      sidenavOpen: true,
      sideNavPinned: false,
      hiddenSideNavContent: true
    }
  }

  onClickSideNavOpen = () => {
    this.setState({ sideNavPinned: !this.state.sideNavPinned });
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-pinned");
    } else {
      document.body.classList.remove("g-sidenav-pinned");
    }
  }

  // làm cho sidenav bình thường khi di chuột (thực tế là khi chuột vào trên đó)
  onMouseEnterSidenav = () => {
    let self = this;
    console.log(self);
    this.setState({
      sidenavOpen: true
    },() => {
      setTimeout(() => {
        console.log(self);
        self.setState({
          hiddenSideNavContent:false
        })
      }, 0)
      
    })
  };
  // làm cho sidenav nhỏ khi di chuột (thực hiện khi chuột rời khỏi nó)
  onMouseLeaveSidenav = () => {
    if(!this.state.sideNavPinned){

      this.setState({
        hiddenSideNavContent:true
      },() => {
        this.setState({
          sidenavOpen: false,
        })
      })
    }
  };

  render() {
    return (
      /* Sidenav */
      <nav className={this.state.sidenavOpen ? "sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white g-sidenav-show" :"sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white g-sidenav-pinned"} id="sidenav-main" onClick={this.onClickSideNavOpen} onMouseEnter={this.onMouseEnterSidenav}
        onMouseLeave={this.onMouseLeaveSidenav}>
        <div className="scrollbar-inner scroll-wrapper">
          {/* Brand */}
          <div className="sidenav-header d-flex align-items-center">
            <Link className="navbar-brand" to="/dashboard">
              <img src="/images/blue.png" className="navbar-brand-img" alt="..." />
            </Link>
            <div className="ml-auto">
              {/* Sidenav toggler */}
              <div className={this.state.sidenavOpen ? "sidenav-toggler d-none d-xl-block" : "sidenav-toggler d-none d-xl-block active"} data-action="sidenav-unpin" data-target="#sidenav-main" >
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-inner">
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="sidenav-collapse-main">
              {/* Nav items  */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active collapsed" to="/dashboard" aria-controls="navbar-dashboards">
                    <HomeIcon className="text-primary" style={{ fontSize: "18px" }} />
                    {
                      <span className="nav-link-text" style={{ marginLeft: "22px", fontSize: !this.state.hiddenSideNavContent?"12px": "0px" }}>Trang chủ</span>
                    }
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link collapsed" href="/quan-ly-nhan-vien">
                    <AssignmentIndIcon className="text-green" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px", fontSize: !this.state.hiddenSideNavContent?"12px": "0px" }}>Quản lý nhân viên</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link collapsed" href="/quan-ly-chuc-vu">
                    <RecentActorsIcon className="text-danger" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px",fontSize: !this.state.hiddenSideNavContent?"12px": "0px" }}>Quản lý chức vụ</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link collapsed" href="/quan-ly-loai-xe">
                    <CommuteIcon className="text-dark" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px",fontSize: !this.state.hiddenSideNavContent?"12px": "0px" }}>Quản lý loại xe</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link collapsed" href="/quan-ly-xe">
                    <DirectionsBusIcon className="text-info" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px",fontSize: !this.state.hiddenSideNavContent?"12px": "0px" }}>Quản lý xe</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link collapsed" href="/quan-ly-khach-hang">
                    <GroupAddIcon className="text-pink" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px",fontSize: !this.state.hiddenSideNavContent?"12px": "0px" }}>Quản lý khách hàng</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link collapsed" href="/quan-ly-ghe">
                    <EventSeatIcon className="text-gray" style={{ fontSize: "18px" }} />
                    <span className="nav-link-text" style={{ marginLeft: "22px",fontSize: !this.state.hiddenSideNavContent?"12px": "0px" }}>Quản lý ghế</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

type Props = {};
type State = {
  sidenavOpen: boolean,
  hiddenSideNavContent: boolean,
  sideNavPinned:boolean
};

export default Sidebar;