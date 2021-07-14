import React from 'react';
import * as S from './style';
import { SwitchProps } from '@atoms/Switch/types';

const Switch = ({ number, onChange }: SwitchProps) => {
  return (
    <S.Wrapper>
      themes
      <S.SwitchWrapper onClick={() => onChange(number == 2 ? 0 : number + 1)}>
        <S.Numbers>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </S.Numbers>
        <S.Leader position={number} />
      </S.SwitchWrapper>
    </S.Wrapper>
  );
};

export default Switch;