import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Footer } from './components/Footer';

test('renders todo list', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tareas Pendientes/i);
  expect(linkElement).toBeInTheDocument();
});


/* test('renders footer', ()=>{
  render(<Footer/>)
}) */