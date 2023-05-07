import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Test from './components/Test/Test';
import Ratings from './components/Ratings-Reviews/Ratings';
import store from './Store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>

              <Route exact path="/"  component={Ratings}/>

        </Switch>
      </Provider>
    </div>
  );
}

export default App;
