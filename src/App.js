import "./App.css";
import FlashCards from "./Components/FlashCards";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <FlashCards />
      <Stats />
    </div>
  );
}

export default App;
