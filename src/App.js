import "./App.css";
import { Route, Switch } from "react-router-dom";
import ManageTrainingClasses from "./components/ManageTrainingClasses/ManageTrainingClasses";
import Chat from "./components/Chat/Chat";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/meetingschedule"
            component={ManageTrainingClasses}
          />
          <Route exact path="/" component={Chat} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
