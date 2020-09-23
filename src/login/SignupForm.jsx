import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/styles.css';
import './css/util.css';

class SignupForm extends Component {
  render() {
    return (
      <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
        <span className="login100-form-title"><span>Đăng kí tài khoản</span></span>
        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
          <input className="input100" type="text" name="username" placeholder="Tên đăng nhập" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
          <input className="input100" type="text" name="email" placeholder="Địa chỉ email" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter password">
          <input className="input100" type="password" name="pass" placeholder="Mật khẩu" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter password">
          <input className="input100" type="password" name="pass" placeholder="Xác nhận mật khẩu" />
          <span className="focus-input100" />
        </div>
        <div className="text-right p-t-10 p-b-20" />
        <div className="container-login100-form-btn">
          <button className="login100-form-btn">Đăng ký</button>
        </div>
        <div className="flex-col-c p-t-20 p-b-10">
          <Link to="/login" className="txt2">Đã có tài khoản</Link>
        </div>
      </form>
    )
  }
}

export default SignupForm;
