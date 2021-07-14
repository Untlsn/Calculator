import React from 'react';
import { Meta, Story } from '@storybook/react';
import ResultBoard  from './index';

export default {
  title: 'Atoms/ResultBoard',
} as Meta;


export const Default: Story<{ text: string }> = ({ text }) => <ResultBoard>{text}</ResultBoard>;
Default.args = {
  text: '0',
};