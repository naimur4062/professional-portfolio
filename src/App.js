import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <Switch>
          <Route>
            
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
