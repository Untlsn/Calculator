import React from 'react';
import * as S from './style';
import { WrapperProps } from '@atoms/Button/types';
import { OnlyChildren } from '@type';

const Button = ({ children, ...props }: WrapperProps & OnlyChildren) => {
  return (
    <S.Wrapper {...props}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
export type ButtonProps = WrapperProps & OnlyChildren