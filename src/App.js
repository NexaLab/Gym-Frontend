import './App.css';
import { Route, Switch } from 'react-router-dom';
import ManageTrainingClasses from './components/ManageTrainingClasses/ManageTrainingClasses';
import Chat from './components/Chat/Chat';




function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/meetingschedule" component={ManageTrainingClasses} />
        <Route exact path="/" component={Chat} />
      </Switch>

    </div>
  );
}

export default App;
