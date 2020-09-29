import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PieChartIcon from '@material-ui/icons/PieChart';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import EqualizerIcon from '@material-ui/icons/Equalizer';

class HeaderDashboard extends Component {
    render() {
        return (
            /* Header */
            <div className="header bg-primary pb-6">
              <div className="container-fluid">
                <div className="header-body">
                  <div className="row align-items-center py-4">
                    <div className="col-lg-6 col-7">
                      <h6 className="h2 text-white d-inline-block mb-0">Default</h6>
                      <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                          <li className="breadcrumb-item"><a href="#"><HomeIcon style= {{fontSize: "20px"}}/></a></li>
                          <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                          <li className="breadcrumb-item active" aria-current="page">Default</li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-lg-6 col-5 text-right">
                      <a href="#" className="btn btn-sm btn-neutral">Mới</a>
                      <a href="#" className="btn btn-sm btn-neutral">Bộ lọc</a>
                    </div>
                  </div>
                  {/* Card stats */}
                  <div className="row">
                    <div className="col-xl-3 col-md-6">
                      <div className="card card-stats">
                        {/* Card body */}
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="card-title text-uppercase text-muted mb-0">Tổng lượng truy cập</h5>
                              <span className="h2 font-weight-bold mb-0">350,897</span>
                            </div>
                            <div className="col-auto">
                              <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                              {<ThumbUpIcon/>}
                              </div>
                            </div>
                          </div>
                          <p className="mt-3 mb-0 text-sm">
                            <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                            <span className="text-nowrap">Kể từ tháng trước</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card card-stats">
                        {/* Card body */}
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="card-title text-uppercase text-muted mb-0">Người dùng mới</h5>
                              <span className="h2 font-weight-bold mb-0">2,356</span>
                            </div>
                            <div className="col-auto">
                              <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                                <PieChartIcon/>
                              </div>
                            </div>
                          </div>
                          <p className="mt-3 mb-0 text-sm">
                            <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                            <span className="text-nowrap">Kể từ tháng trước</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card card-stats">
                        {/* Card body */}
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="card-title text-uppercase text-muted mb-0">Tổng vé đã bán</h5>
                              <span className="h2 font-weight-bold mb-0">924</span>
                            </div>
                            <div className="col-auto">
                              <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                                <ChildFriendlyIcon/>
                              </div>
                            </div>
                          </div>
                          <p className="mt-3 mb-0 text-sm">
                            <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                            <span className="text-nowrap">Kể từ tháng trước</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card card-stats">
                        {/* Card body */}
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="card-title text-uppercase text-muted mb-0">Hiệu suất</h5>
                              <span className="h2 font-weight-bold mb-0">49,65%</span>
                            </div>
                            <div className="col-auto">
                              <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                <EqualizerIcon/>
                              </div>
                            </div>
                          </div>
                          <p className="mt-3 mb-0 text-sm">
                            <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                            <span className="text-nowrap">Kể từ tháng trước</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default HeaderDashboard;