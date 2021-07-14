import React, { useContext, useState } from 'react';
import { OnlyChildren } from '@type';

export const BoardProvider = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(['', () => {}]);

export const ProvideBoard = ({ children }: OnlyChildren) => {
  const data = useState('');

  return (
    <BoardProvider.Provider value={data}>
      {children}
    </BoardProvider.Provider>
  );
};

export const useBoard = () => {
  const [board, changeBoard] = useContext(BoardProvider);

  return [
    board,
    {
      push: (str: string) => changeBoard(old => old + str),
      pop: () => changeBoard(old => old.slice(0, -1)),
      clear: () => changeBoard(''),
    },
  ];
};