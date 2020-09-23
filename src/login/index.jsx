import React from 'react';
import Wrapper from './Wrapper';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export const Login = props => <Wrapper {...props}><LoginForm /></Wrapper>;
export const Signup = props => <Wrapper {...props}><SignupForm /></Wrapper>;


