import { render, screen } from '@testing-library/react';

import Main from './index';

describe('<Main />', () => {
  it('Deve renderizar o header', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve renderizar as cores corretamente', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
