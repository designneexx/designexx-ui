import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from '..';
import packageJson from '../package.json';

const meta: Meta<typeof Header> = {
  title: 'Portfolio-UI/components/Header',
  tags: ['autodocs'],
  component: Header,
  parameters: { docs: { description: { component: packageJson.description }, }, },
};

export const Primary: StoryObj<HeaderProps> = { render: (args) => <Header {...args} /> };

Primary.args = {
  name: 'Иванов Иван Иванович',
  phone: '+7 999 888 77 66',
  email: 'ivanov@ivan.ru',
  navItems: [
    {
      label: 'Привет',
      subLabel: 'Пока',
      href: 'Привет, пока',
      items: [
        {
          label: 'Привет',
          subLabel: 'Пока',
          href: 'Привет, пока',
          items: []
        },
        {
          label: 'Привет',
          subLabel: 'Пока',
          items: []
        },
      ]
    },
    {
      label: 'Привет',
      subLabel: 'Пока',
      href: 'Привет, пока',
      items: []
    },
  ]
};

export default meta;
