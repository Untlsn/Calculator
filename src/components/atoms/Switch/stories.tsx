import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Switch  from './index';

export default {
  title: 'Atoms/Switch',
} as Meta;


export const Default: Story<{ initNumber: number }> = ({ initNumber }) => {
  const [number, changeNumber] = useState(initNumber);

  return (
    <Switch number={number} onChange={changeNumber} />
  );
};

Default.args = {
  initNumber: 0,
};