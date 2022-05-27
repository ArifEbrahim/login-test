import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Login from '../index';

jest.mock('axios');

describe('Login page', () => {
  it('has an element with the correct header text', () => {
    render(<Login />);
    const header = screen.getByText('Sign In');
    expect(header).toBeInTheDocument();
  })

  it('has a username label & input field', () => {
    render(<Login />);
    const usernameLabel = screen.getByLabelText('User Name');
    const usernameInput = screen.getByTestId('username-input');
    expect(usernameLabel).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
  })  

  it('has a password label & input field', () => {
    render(<Login />);
    const passwordLabel = screen.getByLabelText('Password');
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  })  

  it('has a sign in button', () => {
    render(<Login />);
    const submitBtn = screen.getByText('Sign in');
    expect(submitBtn).toBeInTheDocument();
  })

  it('calls axios when the sign in button in clicked', () => {
    render(<Login />);
    fireEvent.click(screen.getByText('Sign in'));
    expect(axios.post).toHaveBeenCalled()
  })

  it('calls the API with the correct data', () => {
    const url = 'https://api.bybits.co.uk/auth/token'
    const headers = {
        'environment': 'mock',
        'Content-Type': 'application/json'
    }
    const data = {
      "username":"testuser",
      "password":"1234",
      "type":"USER_PASSWORD_AUTH"
    }
    render(<Login />);
    fireEvent.change(screen.getByTestId('username-input'), {target: {value: data.username}})
    fireEvent.change(screen.getByTestId('password-input'), {target: {value: data.password}})
    fireEvent.click(screen.getByText('Sign in'));
    expect(axios.post).toHaveBeenCalledWith(url, headers, data);
  })
})