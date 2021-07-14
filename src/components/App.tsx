import React from 'react';
import Home from '@view/Home';
import { ProvideBoard } from '@hooks/useBoard';

const App = () => {
  return (
    <ProvideBoard>
      <Home />
    </ProvideBoard>
  );
};

export default App;