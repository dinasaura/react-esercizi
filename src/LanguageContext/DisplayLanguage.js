import React from 'react';
import { LanguageContext } from './LanguageContext';

function DisplayLanguage() {
  return (
    <div>
      <LanguageContext.Consumer>
        {({ selected }) => (
          <h1>Lingua Selezionata: {selected}</h1>
        )}
      </LanguageContext.Consumer>
    </div>
  );
}

export default DisplayLanguage;


