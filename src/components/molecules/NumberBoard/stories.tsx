import React from 'react';
import { Meta } from '@storybook/react';
import NumberBoard  from './index';

export default {
  title: 'Molecules/NumberBoard',
} as Meta;


export const Default = () => <NumberBoard onClick={alert} />;