import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App 렌더링', () => {
  it('Hello World!가 정상적으로 렌더링된다.', () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent('Hello world!');
  });
});
