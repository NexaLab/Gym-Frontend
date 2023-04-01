import './App.css';
import { Route, Switch } from 'react-router-dom';
import Test from './components/Test/Test';
import ManageTrainingClasses from './components/ManageTrainingClasses/ManageTrainingClasses';
import Sidebar from './components/Sidebar/CustomSideBar';




function App() {
  return (
    <div className="App">
      
      <Switch>

            <Route exact path="/"  component={Test}/>
            <Route exact path="/ManageTrainingClasses"  component={ManageTrainingClasses}/>
            <Route exact path="/sidebar" component={Sidebar}/>
      </Switch>

    </div>
  );
}

export default App;
