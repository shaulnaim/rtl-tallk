import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import DemoFour1 from '../index';

describe('Demo #4.1', () => {
  it("should change the button text to 'Loading...' when clicked", () => {
    const { getByRole } = render(<DemoFour1 />);

    fireEvent.click(getByRole('button'));

    expect(getByRole('button').textContent).toEqual('Loading...');
  });
});
