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

  it('has username field', () => {
    render(<Login />);
    const usernameLabel = screen.getByLabelText('User Name');
    expect(usernameLabel).toBeInTheDocument();
    const usernameInput = screen.getByTestId('user-name-input');
    expect(usernameInput).toBeInTheDocument();
  })  
})