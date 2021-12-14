import React from 'react';
import ChangeGreeting from './components/ChangeGreeting';
import DisplayGreeting from './components/DisplayGreeting';

const App = () => {
  return (
    <>
      <DisplayGreeting />
      <ChangeGreeting />
    </>
  );
};

export default App;
