import { Appbar, Footer } from "./components/index";
import Routes from "./components/Routes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Appbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
