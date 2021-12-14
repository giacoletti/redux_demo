import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const { greeting } = useSelector(state => state);

  return (
    <div>
      {greeting}
    </div>
  );
};

export default App;
