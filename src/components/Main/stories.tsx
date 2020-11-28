import Main from './index';

import { withKnobs, text } from '@storybook/addon-knobs';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta;

export const Basic: Story = () => (
  <Main title={text('Titulo', 'Bem vindo ao curso React Avançado')} />
);
