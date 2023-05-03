import "./App.css";
import { Route, Switch } from "react-router-dom";
import QrCode from "./components/QrCode/QrCode";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={QrCode} />
      </Switch>
    </div>
  );
}

export default App;
