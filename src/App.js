import "./App.css";
import { Route, Switch } from "react-router-dom";
import QrCode from "./components/QrCode/QrCode";
import { Provider } from "react-redux";
import store from "./store";



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={QrCode} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
