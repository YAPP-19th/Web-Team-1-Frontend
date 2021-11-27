import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '@src/pages/NotFound';

describe('App 렌더링', () => {
  it('Not Found 페이지가 정상적으로 렌더링된다.', () => {
    const { container } = render(<NotFound />);
    expect(container).toHaveTextContent('NotFound');
  });
});
