import React, { useContext } from "react";
import { LanguageContext} from "./LanguageContext";

function LanguageSelector() {
    const { selected, languageChange } = useContext(LanguageContext);
  
    const handleChange = (event) => {
      languageChange(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="languageSelect">Seleziona Lingua: </label>
        <select
          id="languageSelect"
          name="language"
          value={selected}
          onChange={handleChange}
        >
          <option value="Inglese">Inglese</option>
          <option value="Spagnolo">Spagnolo</option>
          <option value="Francese">Francese</option>
        </select>
      </div>
    );
  };

  export default LanguageSelector;