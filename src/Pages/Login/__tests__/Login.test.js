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
    const submitBtn = screen.getByText('Sign in');
    fireEvent.click(submitBtn);
    expect(axios.post).toHaveBeenCalled()
  })
})