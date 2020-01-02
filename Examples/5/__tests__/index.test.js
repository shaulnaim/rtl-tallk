import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import DemoFive from '../index';

describe('Demo #5', () => {
  it('should render an error message if an invalid location is entered', () => {
    const { getByPlaceholderText, getByText } = render(<DemoFive />);

    fireEvent.change(getByPlaceholderText('Location'), {
      target: {
        value: 'Invalid value'
      }
    });

    getByText(/Error:/);

  });
});
