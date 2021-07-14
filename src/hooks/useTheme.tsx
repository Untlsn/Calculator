import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { OnlyChildren } from '@type';
import { theme, secondTheme, thirdTheme } from '@style';
import { ThemeProvider } from 'styled-components';

const ThemeContext = React.createContext<[number, Dispatch<SetStateAction<number>>]>([0, () => {}]);

const themeArr = [theme, secondTheme, thirdTheme];

export const ProvideTheme = ({ children }: OnlyChildren) => {
  const [theme, changeTheme] = useState(0);
  
  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      <ThemeProvider theme={themeArr[theme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);