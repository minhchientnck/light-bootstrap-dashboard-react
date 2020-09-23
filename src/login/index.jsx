import React from 'react';
import Wrapper from './Wrapper';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ForgetPasswordForm from './ForgetPasswordForm';

export const Login = props => <Wrapper {...props}><LoginForm /></Wrapper>;
export const Signup = props => <Wrapper {...props}><SignupForm /></Wrapper>;
export const ForgetPassword = props => <Wrapper {...props}><ForgetPasswordForm /></Wrapper>;

