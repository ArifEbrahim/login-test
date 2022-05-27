import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from '../index';

describe('Login page', () => {
  it('has an element with the correct header text', () => {
    render(<Login />);
    const header = screen.getByText('Sign In');
    expect(header).toBeInTheDocument();
  })

  it('has a username field', () => {
    render(<Login />);
    const usernameLabel = screen.getByLabelText('User Name');
    const usernameInput = screen.getByTestId('username-input');
    expect(usernameLabel).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
  })  

  it('has a password field', () => {
    render(<Login />);
    const passwordLabel = screen.getByLabelText('Password');
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  })  
})