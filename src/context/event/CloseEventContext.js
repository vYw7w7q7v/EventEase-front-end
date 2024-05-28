import React, { createContext, useContext, useState } from 'react';


const CloseEventContext = createContext();

export const CloseEventProvider = ({ children }) => {
  const [closeEvent, setCloseEvent] = useState(0); // инициализация setCloseEvent

  return (
    <CloseEventContext.Provider value={{ closeEvent, setCloseEvent }}>
      {children}
    </CloseEventContext.Provider>
  );
};

export const useCloseEventContext = () => {
  return useContext(CloseEventContext);
};
