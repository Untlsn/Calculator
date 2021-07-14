import React from 'react';
import { GlobalStyle } from '@style';
import { OnlyChildren } from '~/type';
import { ProvideTheme } from '@hooks/useTheme';

const StyleProvider = ({ children }: OnlyChildren) => {
  return (
    <ProvideTheme>
      <GlobalStyle />
      {children}
    </ProvideTheme>
  );
};

export default StyleProvider;
