import React from 'react';
import * as S from './style';
import { WrapperProps } from './types.d';
import { OnlyChildren } from '@type';

export default S.Wrapper;
export type ButtonProps = WrapperProps & OnlyChildren;