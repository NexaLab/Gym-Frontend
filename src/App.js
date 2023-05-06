import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import store from './store';
import { Provider } from 'react-redux';




function App() {
  return (
    <div className="App">
       <Provider store={store}>
      <Switch>
            {/* <Route exact path="/meetingschedule"  component={ManageTrainingClasses}/> */}
            <Route exact path="/"  component={Login}/>
      </Switch>
      </Provider>
    </div>
  );
}

export default App;
