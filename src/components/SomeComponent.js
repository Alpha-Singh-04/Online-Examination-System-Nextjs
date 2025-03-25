// filepath: /src/components/SomeComponent.js
import React, { useContext } from 'react';
import { SomeContext } from '../context/SomeContextProvider';

const SomeComponent = () => {
  const { basename } = useContext(SomeContext);

  return (
    <div>
      <p>Basename: {basename}</p>
    </div>
  );
};

export default SomeComponent;