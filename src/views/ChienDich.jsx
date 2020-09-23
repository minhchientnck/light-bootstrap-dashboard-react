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

import CustomButton from "components/CustomButton/CustomButton.jsx";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import TaoChienDich from './TaoChienDich';

class ChienDich extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreate: false,
    };
  }

  taoChienDich = () => {
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
    this.taoChienDich();
  }

  deleteChienDich = () => {

  }

  render() {
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
                actions={<Button onClick={this.taoChienDich}>Tạo Chiến Dịch</Button>}
                content={
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
                                <CustomButton onClick={this.editChienDich} bsStyle="info" simple type="button" bsSize="xs">
                                  <i className="fa fa-edit" />
                                </CustomButton>
                              </OverlayTrigger>
                              <OverlayTrigger placement="top" overlay={<Tooltip id="remove_tooltip">Remove</Tooltip>}>
                                <CustomButton onClick={this.deleteChienDich} bsStyle="danger" simple type="button" bsSize="xs">
                                  <i className="fa fa-times" />
                                </CustomButton>
                              </OverlayTrigger>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              /> :
                <Card
                  title="Tạo Chiến Dịch"
                  category=""
                  ctTableFullWidth
                  ctTableResponsive
                  actions={<Button onClick={this.backToChienDich}>Back</Button>}
                  content={<TaoChienDich />}
                />}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ChienDich;
