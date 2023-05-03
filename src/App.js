import './App.css';
import { Route, Switch } from 'react-router-dom';
import Test from './components/Test/Test';
import ManageTrainingClasses from './components/ManageTrainingClasses/ManageTrainingClasses';
import Welcome from './components/Welcome/Welcome';
import QrCodeTable from './components/QrCode/QrCodeTable/QrCodeTable';
import QrCode from './components/QrCode/QrCode';




function App() {
  return (
    <div className="App">
      
      <Switch>
            {/* <Route exact path="/meetingschedule"  component={ManageTrainingClasses}/> */}
            <Route exact path="/"  component={QrCode}/>
      </Switch>

    </div>
  );
}

export default App;
