import React from 'react';
import * as S from './style';
import Button from '@atoms/Button';
import { NumberBoardProps } from '@molecules/NumberBoard/types';

const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'];

const NumberBoard = ({ onClick }: NumberBoardProps) => {
  return (
    <S.Wrapper>{
      numbers.map(num => <Button key={num} color='default' onClick={() => onClick(num)}>{num}</Button>)
    }</S.Wrapper>
  );
};

export default NumberBoard;