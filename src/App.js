import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Test from './components/Test/Test';
import WeeklySchedule from './components/weekly-schedule/WeeklySchedule';




function App() {
  return (
    <div className="App">
      
      <Switch>

            <Route exact path="/"  component={WeeklySchedule}/>

      </Switch>

    </div>
  );
}

export default App;
