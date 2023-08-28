import "./App.css";
import React, { useContext } from "react";
import DefaultProps from "./Welcome/defaultProps";
import SecondProp from "./Welcome/SecondProp";
import Counter from "./Counter/Counter";
import ClickCounter from "./Counter/ClickCounter";
import ClickTracker from "./Counter/ClickTracker";
import InteractiveWelcome from "./Forms/InteractiveWelcome";
import Login from "./Forms/Login";
import UncontrolledLogin from "./Forms/UncontrolledLogin";
import TodoListLastEx from "./Lists/TodoListLastEx";
import { LanguageProvider } from "./LanguageContext/LanguageContext";
import DisplayLanguage from "./LanguageContext/DisplayLanguage";
import LanguageSelector from "./LanguageContext/LanguageSelector";
// import TodoList from './Lists/TodoList';
// import CounterLifecycle from './CounterLifecycle';

function App() {
  return (
    <div>
      <DefaultProps />
      {/* <SecondProp name={<strong>John</strong>} age={30} /> */}
      <SecondProp name={"John"} age={18} />
      <Counter valIniziale={5} incrementInterval={500} incrementQuantita={2} />
      <ClickCounter />
      <ClickTracker />
      <InteractiveWelcome />
      <Login />
      <UncontrolledLogin />
      {/* <TodoList/> */}
      <TodoListLastEx
        render={(items, removeItem) => (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => removeItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      />

<LanguageProvider>
      <div>
        <DisplayLanguage />
        <LanguageSelector/>
      </div>
    </LanguageProvider>
    </div>
  );
}


export default App;
