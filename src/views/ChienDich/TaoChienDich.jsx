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
  Form,
} from "react-bootstrap";
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { 
  InputReduxField,
  SelectReduxField,
  required,
  requiredMultiValue,
  domain,
 } from "components/ReduxFields/ReduxFields.jsx";
import {
  TEN_MIEN,
  CAC_NGUON,
  CAC_THIET_BI,
  CAC_QUOC_GIA,
  TR_CH_TIEP,
} from './Constants';
import Button from "components/CustomButton/CustomButton.jsx";

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
    const { handleSubmit } = this.props;
    return (
      <div className="content">
        <Form onSubmit={handleSubmit} initialValues>
          <Row>
            <Col md={5}>
              <InputReduxField
                label="Tên Chiến Dịch"
                name="tenchiendich"
                id="tenchiendich"
                placeholder="Tên Chiến dịch"
                type="text"
                required
                validate={[required]}
              />
            </Col>
            <Col md={4}>
              <InputReduxField
                label="Subdomain"
                name="subdomain"
                id="subdomain"
                placeholder="Subdomain (có thể để trống)"
                type="text"
              />
            </Col>
            <Col md={3}>
              <SelectReduxField
                label="Chọn tên miền"
                name="tenmien"
                id="tenmien"
                value={this.state.tenMien}
                onChange={this.chonTenMien}
                placeholder="Chọn tên miền"
                options={TEN_MIEN}
                required
                validate={[required]}
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <SelectReduxField
                label="Chọn nguồn"
                name="chonnguon"
                id="chonnguon"
                value={this.state.nguon}
                onChange={this.chonNguon}
                placeholder="Chọn nguồn"
                options={CAC_NGUON}
                required
                validate={[required]}
              />
            </Col>
            <Col md={4}>
              <SelectReduxField
                label="Chọn thiết bị"
                name="chonthietbi"
                id="chonthietbi"
                value={this.state.thietbi}
                onChange={this.chonThietBi}
                placeholder="Chọn thiết bị"
                isMulti
                options={CAC_THIET_BI}
                required
                validate={[required, requiredMultiValue]}
              />
            </Col>
            <Col md={4}>
              <SelectReduxField
                label="Quốc gia cho phép"
                name="quocgiachophep"
                id="quocgiachophep"
                value={this.state.quogia}
                onChange={this.chonQuocGiaChoPhep}
                placeholder="Quốc gia cho phép"
                options={CAC_QUOC_GIA}
                required
                validate={[required]}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <InputReduxField
                label="Tạm dừng chiến dịch nếu vượt quá"
                name="maximum"
                id="maximum"
                type="number"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <InputReduxField
                label="Link bán hàng"
                name="linkban"
                id="linkban"
                type="text"
                required
                validate={[required, domain]}
              />
            </Col>
            <Col md={4}>
              <SelectReduxField
                label="Trực tiếp/Chuyển tiếp"
                name="tructiepchuyentieplinkban"
                id="tructiepchuyentieplinkban"
                value={this.state.trucTiepChuyenTiepLinkBan}
                onChange={this.chonTrucTiepChuyenTiepLinkBan}
                options={[
                  { value: 0, label: 'Trực tiếp' },
                  { value: 1, label: 'Chuyển tiếp' },
                ]}
                required
                validate={[required]}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <InputReduxField
                label="Link Bot"
                name="linkbot"
                id="linkbot"
                type="text"
                required
                validate={[required, domain]}
              />
            </Col>
            <Col md={4}>
              <SelectReduxField
                label="Trực tiếp/Chuyển tiếp"
                name="tructiepchuyentieplinkbot"
                id="tructiepchuyentieplinkbot"
                value={this.state.trucTiepChuyenTiepLinkBot}
                onChange={this.chonTrucTiepChuyenTiepLinkBot}
                options={TR_CH_TIEP}
                required
                validate={[required]}
              />
            </Col>
          </Row>
          <Button bsStyle="info" pullRight fill type="submit" >
            Lưu lại
          </Button>
          <div className="clearfix" />
        </Form>
      </div>
    );
  }
}

TaoChienDich.propTypes = {
  chiendich: PropTypes.shape({}),
};

TaoChienDich.defaultProps = {
  chiendich: {},
};

const TaoChienDichComponent = (reduxForm({
  form: 'TaoChienDichForm',
})(TaoChienDich));

export default TaoChienDichComponent;
