import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/styles.css';
import './css/util.css';

class ForgetPasswordForm extends Component {
  render() {
    return (
      <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
        <span className="login100-form-title"><span>Nhập địa chỉ email đã đăng ký</span></span>
        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
          <input className="input100" type="email" name="email" placeholder="Email đã đăng ký" />
          <span className="focus-input100" />
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn">Lấy lại mật khẩu</button>
        </div>
        <div className="flex-col-c p-t-20 p-b-10">
          <Link to="/login" className="txt2">Đã có tài khoản</Link>
        </div>
      </form>
    )
  }
}

export default ForgetPasswordForm;

