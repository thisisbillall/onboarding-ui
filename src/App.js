import "./App.css";
import Header from "./components/Header";
import Page1 from "./pages/Page1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Page1 />
      </header>
    </div>
  );
}

export default App;
