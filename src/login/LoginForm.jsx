import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/styles.css';
import './css/util.css';

class LoginForm extends Component {
  render() {
    return (
      <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
        <span className="login100-form-title"><span>Đăng nhập</span></span>
        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
          <input className="input100" type="text" name="username" placeholder="Tên đăng nhập" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Please enter password">
          <input className="input100" type="password" name="pass" placeholder="Mật khẩu" />
          <span className="focus-input100" />
        </div>
        <div className="text-right p-t-13 p-b-10">
          <span className="txt1">Quên </span>
          <Link to="/forget-password" className="txt2">tài khoản / mật khẩu?</Link>
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn">Đăng nhập</button>
        </div>
        <div className="flex-col-c p-t-30 p-b-10">
          <span className="txt1 p-b-9">Chưa có tài khoản?</span>
          <Link to="/signup" className="txt3">Đăng ký ngay</Link>
        </div>
      </form>
    )
  }
}

export default LoginForm;

