import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [selected, setSelected] = useState('inglese'); 

  const languageChange = (newLanguage) => {
    setSelected(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ selected, languageChange }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };

