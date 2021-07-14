import React from 'react';
import * as S from './style';
import Switch from '@atoms/Switch';
import { useTheme } from '@hooks/useTheme';

const Header = () => {
  const [theme, changeTheme] = useTheme();

  return (
    <S.Wrapper>
      Calc
      <Switch number={theme} onChange={changeTheme} />
    </S.Wrapper>
  );
};

export default Header;