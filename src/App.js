import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import React, { Suspense } from "react";





const Chat = React.lazy(() => import("./components/Chat/Chat"));
const ManageTrainingClasses = React.lazy(() => import("./components/ManageTrainingClasses/ManageTrainingClasses"))
const QrCode = React.lazy(() => import("./components/QrCode/QrCode"));
const Payment = React.lazy(() => import("./components/Payment/Payment"));





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
            <Route exact path="/qrCode" component={QrCode} />
            <Route exact path="/payment" component={Payment} />
          </Suspense>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
