import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from '../index';

describe('Login page', () => {
  it('has an element with the correct header text', () => {
    render(<Login />);
    const headerEl = screen.getByText('Sign In')
    expect(headerEl).toBeInTheDocument();
  })
})