/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Form,
} from "react-bootstrap";
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form';
import Select from 'react-select';
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { ReduxField } from "components/ReduxField/ReduxField.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Card from "components/Card/Card.jsx";

class TaoChienDich extends Component {
  state = {
    tenMien: null,
    nguon: null,
    thietbi: null,
    quogia: 'VN',
    trucTiepChuyenTiepLinkBan: 0,
    trucTiepChuyenTiepLinkBot: 0,
  };

  chonTenMien = tenMien => {
    this.setState({ tenMien });
  }

  chonNguon = nguon => {
    this.setState({ nguon });
  }

  chonThietBi = thietbi => {
    this.setState({ thietbi });
  }

  chonQuocGiaChoPhep = quogia => {
    this.setState({ quogia });
  }

  chonTrucTiepChuyenTiepLinkBan = trucTiepChuyenTiepLinkBan => {
    this.setState({ trucTiepChuyenTiepLinkBan });
  }

  chonTrucTiepChuyenTiepLinkBot = trucTiepChuyenTiepLinkBot => {
    this.setState({ trucTiepChuyenTiepLinkBot });
  }

  render() {
    
    return (
      <div className="content">
        <Form onSubmit={this.handleSubmit} initialValues>
          <Row>
            <Col md={5}>
              <ReduxField
                label="Tên Chiến Dịch"
                name="tenchiendich"
                id="tenchiendich"
                placeholder="Tên Chiến dịch"
                component={FormControl}
                type="text"
                required
              />
            </Col>
            <Col md={4}>
              <ReduxField
                label="Subdomain"
                name="subdomain"
                id="subdomain"
                placeholder="Subdomain (có thể để trống)"
                component={FormControl}
                type="text"
              />
            </Col>
            <Col md={3}>
              <ReduxField
                label="Chọn tên miền"
                name="tenmien"
                id="tenmien"
                component={() => <Select
                  value={this.state.tenMien}
                  onChange={this.chonTenMien}
                  placeholder="Chọn tên miền"
                  options={[
                    { value: 'jp-skincare.info', label: 'jp-skincare.info' },
                    { value: 'skin101.top', label: 'skin101.top' },
                  ]} />}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <ReduxField
                label="Chọn nguồn"
                name="chonnguon"
                id="chonnguon"
                component={() => <Select
                  value={this.state.nguon}
                  onChange={this.chonNguon}
                  placeholder="Chọn nguồn"
                  options={[
                    { value: 'facebook', label: 'Facebook' },
                  ]} />}
                required
              />
            </Col>
            <Col md={4}>
              <ReduxField
                label="Chọn thiết bị"
                name="chonthietbi"
                id="chonthietbi"
                component={() => <Select
                  value={this.state.thietbi}
                  onChange={this.chonThietBi}
                  placeholder="Chọn thiết bị"
                  isMulti
                  options={[
                    { value: 'mobile', label: 'Mobile' },
                    { value: 'desktop', label: 'Desktop' },
                  ]} />}
                required
              />
            </Col>
            <Col md={4}>
              <ReduxField
                label="Quốc gia cho phép"
                name="quocgiachophep"
                id="quocgiachophep"
                component={() => <Select
                  value={this.state.quogia}
                  onChange={this.chonQuocGiaChoPhep}
                  placeholder="Quốc gia cho phép"
                  options={[
                    { value: 'VN', label: 'Việt Nam' },
                    { value: 'US', label: 'Hoa Kỳ' },
                  ]} />}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ReduxField
                label="Tạm dừng chiến dịch nếu vượt quá"
                name="maximum"
                id="maximum"
                component={FormControl}
                type="number"
              />
            </Col>
          </Row>
          <Row>
           <Col md={8}>
              <ReduxField
                label="Link bán hàng"
                name="linkban"
                id="linkban"
                component={FormControl}
                type="text"
                required
              />
            </Col>
            <Col md={4}>
              <ReduxField
                label="Trực tiếp/Chuyển tiếp"
                name="tructiepchuyentieplinkban"
                id="tructiepchuyentieplinkban"
                component={() => <Select
                  value={this.state.trucTiepChuyenTiepLinkBan}
                  onChange={this.chonTrucTiepChuyenTiepLinkBan}
                  options={[
                    { value: 0, label: 'Trực tiếp' },
                    { value: 1, label: 'Chuyển tiếp' },
                  ]} />}
                required
              />
            </Col>
          </Row>
          <Row>
           <Col md={8}>
              <ReduxField
                label="Link Bot"
                name="linkbot"
                id="linkbot"
                component={FormControl}
                type="text"
                required
              />
            </Col>
            <Col md={4}>
              <ReduxField
                label="Trực tiếp/Chuyển tiếp"
                name="tructiepchuyentieplinkbot"
                id="tructiepchuyentieplinkbot"
                component={() => <Select
                  value={this.state.trucTiepChuyenTiepLinkBot}
                  onChange={this.chonTrucTiepChuyenTiepLinkBot}
                  options={[
                    { value: 0, label: 'Trực tiếp' },
                    { value: 1, label: 'Chuyển tiếp'},
                  ]} />}
                required
              />
            </Col>
          </Row>
          <Button bsStyle="info" pullRight fill type="submit">
            Lưu lại
          </Button>
          <div className="clearfix" />
        </Form>
      </div>
    );
  }
}

export default connect(
  state => ({
    initialValues: state
  }),
)(reduxForm({
  form: 'TaoChienDichForm',
})(TaoChienDich))