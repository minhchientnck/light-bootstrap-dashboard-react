import React from "react";
import { Field } from 'redux-form';
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import Select from 'react-select';

export const required = value => value ? undefined : 'Required';

export const requiredMultiValue = value => value && value.length > 0 ? undefined : 'Required';

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined;

export const domain = value =>
  value && !/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i.test(value) ?
    'Invalid email domain' : undefined;

const FieldInput = ({ input, meta, type, placeholder, min, max }) => (
  <FormGroup>
    <FormControl
      {...input}
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      value={input.value}
      onChange={input.onChange} />
    {meta.touched && meta.error && <span style={{ color: 'red' }}>{meta.error}</span>}
  </FormGroup>
);

const SelectInput = ({ input, meta, options, name, id, isMulti}) => (
  <FormGroup>
    <Select
      {...input}
      id={id}
      name={name}
      options={options}
      value={input.value}
      onChange={value => input.onChange(value)}
      onBlur={() => input.onBlur()}
      onBlurResetsInput={false}
      isMulti={isMulti}
    />
    {meta.touched && meta.error && <span style={{ color: 'red' }}>{meta.error}</span>}
  </FormGroup>);

export const InputReduxField = props => (
  <FormGroup>
    <ControlLabel>{props.label}{props.required ? <span style={{ color: 'red' }}>*</span> : ''}</ControlLabel>
    <Field {...props} component={FieldInput} />
  </FormGroup>);

export const SelectReduxField = props => (
  <FormGroup>
    <ControlLabel>{props.label}{props.required ? <span style={{ color: 'red' }}>*</span> : ''}</ControlLabel>
    <Field {...props} component={SelectInput} />
  </FormGroup>
);
