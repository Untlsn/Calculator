import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps }  from './index';

export default {
  title: 'Atoms/Button',
} as Meta;


const Template: Story<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};
export const Default = Template.bind({});
Default.args = {
  color: 'default',
  big: false,
  children: '0',
  square: false,
};
export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
  big: false,
  children: '0',
  square: false,
};
export const BigBlue = Template.bind({});
BigBlue.args = {
  color: 'blue',
  big: true,
  children: '0',
  square: false,
};
export const RedBig = Template.bind({});
RedBig.args = {
  color: 'red',
  big: true,
  children: '0',
  square: false,
};
export const Square = Template.bind({});
Square.args = {
  color: 'default',
  big: false,
  children: '0',
  square: true,
};

export const SquareBig = Template.bind({});
SquareBig.args = {
  color: 'default',
  big: true,
  children: '0',
  square: true,
};