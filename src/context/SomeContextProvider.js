import React, { createContext, useState } from 'react';

export const SomeContext = createContext();

const SomeContextProvider = ({ children }) => {
  const [value, setValue] = useState({ basename: 'someValue' });

  return (
    <SomeContext.Provider value={value}>
      {children}
    </SomeContext.Provider>
  );
};

export default SomeContextProvider;