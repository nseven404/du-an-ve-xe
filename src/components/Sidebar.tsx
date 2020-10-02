import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Link } from 'react-router-dom';

class Sidebar extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      sidenavOpen: true
    }
  }

  onClickSideNavOpen = () => {
    this.setState({ sidenavOpen: !this.state.sidenavOpen });
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-pinned");
    } else {
      document.body.classList.remove("g-sidenav-pinned");
    }
  }

  // makes the sidenav normal on hover (actually when mouse enters on it)
  onMouseEnterSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  };
  // làm cho sidenav nhỏ khi di chuột (thực sự khi chuột rời khỏi nó)
  onMouseLeaveSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  };

  render() {
    return (
      /* Sidenav */
      <nav className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
        <div className="scrollbar-inner scroll-wrapper">
          {/* Brand */}
          <div className="sidenav-header d-flex align-items-center">
            <Link className="navbar-brand" to="/dashboard">
              <img src="/images/blue.png" className="navbar-brand-img" alt="..." />
            </Link>
            <div className="ml-auto">
              {/* Sidenav toggler */}
              <div className={this.state.sidenavOpen ? "sidenav-toggler d-none d-xl-block" : "sidenav-toggler d-none d-xl-block active"} data-action="sidenav-unpin" data-target="#sidenav-main" onClick={this.onClickSideNavOpen} onMouseEnter={this.onMouseEnterSidenav}
                onMouseLeave={this.onMouseLeaveSidenav}>
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
                    <HomeIcon className="text-primary" style = {{fontSize: "18px"}}/>
                    <span className="nav-link-text" style = {{marginLeft: "22px"}}>Trang chủ</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link collapsed" href="/quan-ly-nhan-vien">
                    <AssignmentIndIcon className="text-green" style = {{fontSize: "18px"}}/>
                    <span className="nav-link-text" style = {{marginLeft: "22px"}}>Quản lý nhân viên</span>
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="../../pages/charts.html">
                    <i className="ni ni-chart-pie-35 text-info"></i>
                    <span className="nav-link-text">Charts</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../../pages/calendar.html">
                    <i className="ni ni-calendar-grid-58 text-red"></i>
                    <span className="nav-link-text">Calendar</span>
                  </a>
                </li> */}
              </ul>
              {/* Divider */}
             {/*  <hr className="my-3" /> */}
              {/* Heading */}
{/*               <h6 className="navbar-heading p-0 text-muted">DEVELOPER</h6>
 */}              {/* Navigation */}
              {/* <ul className="navbar-nav mb-md-3">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.facebook.com/O.o.HVN.Official.o.O" target="_blank">
                    <i className="ni ni-spaceship"></i>
                    <span className="nav-link-text">TEAM</span>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

type Props = {};
type State = {
  sidenavOpen: boolean
};

export default Sidebar;