import './App.css';
import FunctionalButton from "./buttons/functionButton";
import Es6FunctionalButton from "./buttons/es6FunctionButton";
import ComponentButton from "./buttons/componentButton";
import PureButton from "./buttons/pureComponentButton";
import MessageHello from "./messages/messageHello";


function App() {
  return (
    <div className="App">
    <header>
      <MessageHello/>
    </header>
      <main>
        <FunctionalButton/>
        <Es6FunctionalButton/>
        <ComponentButton/>
        <PureButton/>
      </main>
    </div>
  );
}

export default App;
