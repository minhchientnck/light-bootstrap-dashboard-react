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
import { Grid, Row, Col, Table, Button } from "react-bootstrap";

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

  editCHienDich = () => {
    this.taoChienDich();
  }

  deleteCHienDich = () => {

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
                                <Button onClick={this.editCHienDich}><i className="pe-7s-trash" /></Button>&nbsp;&nbsp;
                                <Button onClick={this.deleteCHienDich}><i className="pe-7s-pen" /></Button>
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
