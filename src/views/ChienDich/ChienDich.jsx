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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

import Card from "components/Card/Card.jsx";
import DanhSachChienDich from './DanhSachChienDich';
import TaoChienDich from './TaoChienDich';
import {
  CAC_NGUON,
  CAC_THIET_BI,
  CAC_QUOC_GIA,
  TR_CH_TIEP,
} from './Constants';
import * as Actions from './Actions';

class ChienDich extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreate: false,
    };
  }

  createChienDich = () => {
    this.setState({
      isCreate: true
    });
  }

  backToChienDich = () => {
    this.setState({
      isCreate: false
    });
  }

  editChienDich = () => {
    this.createChienDich();
  }

  deleteChienDich = () => {

  }

  saveChienDich = values => {
    console.log(values);
    this.props.actions.createChienDich(values);
  }

  render() {
    console.log(this.props);
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              {!this.state.isCreate ? <Card
                title="Danh Sách Chiến Dịch"
                category=""
                ctTableFullWidth
                ctTableResponsive
                actions={<Button onClick={this.createChienDich}>Tạo Chiến Dịch</Button>}
                content={<DanhSachChienDich
                  editChienDich={this.editChienDich}
                  deleteChienDich={this.deleteChienDich}
                />}
              /> :
                <Card
                  title="Tạo Chiến Dịch"
                  category=""
                  ctTableFullWidth
                  ctTableResponsive
                  actions={<Button onClick={this.backToChienDich}>Back</Button>}
                  content={<TaoChienDich
                    chiendich={this.props.chiendich}
                    initialValues={this.props.chiendich}
                    onSubmit={this.saveChienDich}
                    backToChienDich={this.backToChienDich}
                  />}
                />}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

ChienDich.propTypes = {
  chiendich: PropTypes.shape({}),
  actions: {
    createChienDich: PropTypes.func,
  },
};

ChienDich.defaultProps = {
  chiendich: {
    chonnguon: CAC_NGUON[0],
    chonthietbi: [CAC_THIET_BI[0]],
    quocgiachophep: CAC_QUOC_GIA[0],
    tructiepchuyentieplinkban: TR_CH_TIEP[0],
    tructiepchuyentieplinkbot: TR_CH_TIEP[0],
    linkban: 'linkban.com',
    linkbot: 'linkbot.com',
  }
};

const mapStateToProps = state => ({
});

const mapDispathToProps = dispatch => ({
  actions: bindActionCreators(Object.assign(
    {},
    Actions,
  ), dispatch),
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ChienDich);

