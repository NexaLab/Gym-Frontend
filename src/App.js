import "./App.css";
import { Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import React, { Suspense } from "react";





const Chat = React.lazy(() => import("./components/Chat/Chat"));
const ManageTrainingClasses = React.lazy(() => import("./components/ManageTrainingClasses/ManageTrainingClasses"))





function App() {
  return (


    <Provider store={store}>
      <div className="App">
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route
              exact
              path="/meetingschedule"
              component={ManageTrainingClasses}
            />
            <Route exact path="/" component={Chat} />
          </Suspense>
        </Switch>
      </div>
    </Provider>

  );
}

export default App;
