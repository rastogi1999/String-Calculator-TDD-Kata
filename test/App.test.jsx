import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})

describe('String Calculator React App', () => {
  it('calculates the sum of numbers correctly', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    
    const input = getByPlaceholderText('Enter the string value');
    const submitButton = getByText('Submit');
    const result = getByText('0');
    
    fireEvent.change(input, { target: { value: '1,2,3' } });
    fireEvent.click(submitButton);
    
    expect(result).toHaveTextContent('6');
  });

  it('clears the input and sum', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    
    const input = getByPlaceholderText('Enter the string value');
    const submitButton = getByText('Submit');
    const clearButton = getByText('Clear');
    const result = getByText('0');
    
    fireEvent.change(input, { target: { value: '1,2,3' } });
    fireEvent.click(submitButton);
    
    fireEvent.click(clearButton);
    
    expect(input.value).toBe('');
    expect(result).toHaveTextContent('0');
  });
});
