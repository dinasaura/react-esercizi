import "./App.css";
// import SecondProp from "./Welcome/SecondProp";
// import ClickCounter from "./Counter/ClickCounter";
import ClickTracker from "./Counter/ClickTracker";
import InteractiveWelcome from "./Forms/InteractiveWelcome";
import Login from "./Forms/Login";
import TodoListLastEx from "./Lists/TodoListLastEx";
import { LanguageProvider } from "./LanguageContext/LanguageContext";
import DisplayLanguage from "./LanguageContext/DisplayLanguage";
import LanguageSelector from "./LanguageContext/LanguageSelector";
import ClickCounterFunc from "./counter-function/ClickCounterFunc";
import ClickCounterUseEffect from "./counter-function/ClickCounterUseEfect";
// import GithubUser from "./counter-function/GitHubUser";
import GithubUserList from "./counter-function/GithubUserList";
import CounterComponent from "./CustomHooks/CounterComponent";
import LoginForm from "./CustomHooks/LoginForm";
import GithubUsers from "./CustomHooks/GithubUsers/GithubUsers";


function App() {

  const handleCounterChange = (newCount) => {
    console.log('Contatore cambiato:', newCount);
  };

  return (
    <div>
      {/* <DefaultProps /> */}
      {/* <SecondProp name={<strong>John</strong>} age={30} /> */}
      {/* <SecondProp name={"John"} age={18} /> */}
      {/* <Counter valIniziale={5} incrementInterval={500} incrementQuantita={2} /> */}
      {/* <ClickCounter /> */}
      <ClickTracker />
      <InteractiveWelcome />
      <Login />
      {/* <UncontrolledLogin /> */}
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

    <ClickCounterFunc />
    <ClickCounterUseEffect onCounterChange={handleCounterChange}/>

    {/* <GithubUser username="mojombo" /> */}
    <GithubUserList />

    <CounterComponent />
    <LoginForm/>
    <GithubUsers />
    </div>
  );
}


export default App;
