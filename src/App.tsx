import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import LoginQL from './pages/LoginQL';
import NhanVien from './pages/NhanVien';
import ChucVu from './pages/ChucVu';
import LoaiXe from './pages/LoaiXe';
import Xe from './pages/Xe';
import SettingsNhanVien from './pages/SettingsNhanVien';
import KhachHang from './pages/KhachHang';
import Ghe from './pages/Ghe';
import Ve from './pages/Ve';
import HorizontalLinearStepper from './components/StepperVe';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
          {/* <Route path="/steper">
              <HorizontalLinearStepper/>
            </Route> */}
            <Route path="/settings">
              <SettingsNhanVien/>
            </Route>
            <Route path="/quan-ly-ve">
              <Ve />
            </Route>
            <Route path="/quan-ly-ghe">
              <Ghe />
            </Route>
            <Route path="/quan-ly-khach-hang">
              <KhachHang />
            </Route>
            <Route path="/quan-ly-xe">
              <Xe />
            </Route>
            <Route path="/quan-ly-loai-xe">
              <LoaiXe />
            </Route>
            <Route path="/quan-ly-chuc-vu">
              <ChucVu />
            </Route>
            <Route path="/quan-ly-nhan-vien">
              <NhanVien />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/dang-ky">
              <Register />
            </Route>
            <Route path="/">
              <LoginQL />
            </Route>
          </Switch>
        </div>
      </Router >
    </div>
  );
}

export default App;
