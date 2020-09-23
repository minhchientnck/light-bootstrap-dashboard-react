import React, { Component } from "react";
import { FormGroup, ControlLabel } from "react-bootstrap";
import { Field } from 'redux-form';

export class ReduxField extends Component {
  render() {
    return (<FormGroup>
      <ControlLabel>{this.props.label}{this.props.required ? <span style={{color:'red'}}>*</span> : ''}</ControlLabel>
      <Field {...this.props} />
    </FormGroup>);
  }
}

export default ReduxField;