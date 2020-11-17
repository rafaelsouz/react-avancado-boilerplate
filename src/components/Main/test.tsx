import { render, screen } from '@testing-library/react';

import Main from './index';

describe('<Main />', () => {
  it('Deve renderizar o header', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();
  });
});
