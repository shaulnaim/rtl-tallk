import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import DemoFour2 from '../index';

describe('Demo #4.2', () => {
  it("should change the button text to 'Loading...' when clicked", () => {
    const { getByRole } = render(<DemoFour2 />);

    fireEvent.click(getByRole('button'));

    expect(getByRole('button').textContent).toEqual('Loading...');
  });
});
