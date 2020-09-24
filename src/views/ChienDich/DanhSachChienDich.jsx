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
import { Tooltip, OverlayTrigger, Grid, Row, Col, Table, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

import CustomButton from "components/CustomButton/CustomButton.jsx";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

class DanhSachChienDich extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreate: false,
    };
  }

  render() {
    return (
      <div className="content">
        <Table striped hover>
          <thead>
            <tr>
              {thArray.map((prop, key) => {
                return <th key={key}>{prop}</th>;
              })}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tdArray.map((prop, key) => {
              return (
                <tr key={key}>
                  {prop.map((prop, key) => {
                    return <td key={key}>{prop}</td>;
                  })}
                  <td>
                    <OverlayTrigger placement="top" overlay={<Tooltip id="edit_tooltip">Edit Task</Tooltip>}>
                      <CustomButton onClick={this.props.editChienDich} bsStyle="info" simple type="button" bsSize="xs">
                        <i className="fa fa-edit" />
                      </CustomButton>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={<Tooltip id="remove_tooltip">Remove</Tooltip>}>
                      <CustomButton onClick={this.props.deleteChienDich} bsStyle="danger" simple type="button" bsSize="xs">
                        <i className="fa fa-times" />
                      </CustomButton>
                    </OverlayTrigger>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

DanhSachChienDich.propTypes = {
  chiendich: PropTypes.shape({}),
};

DanhSachChienDich.defaultProps = {
  chiendich: {
    tenchiendich: 'abcccc',
    tructiepchuyentieplinkban: 0,
    tructiepchuyentieplinkbot: 0,
  }
};

export default DanhSachChienDich;
