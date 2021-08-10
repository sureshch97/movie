
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import MovieForm from './components/movieform'
import Store from './store'
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={Store}>
    <div className="App container">
      <Router>
        <Switch>
          <Route exact path='/' component={MovieForm}/>
         </Switch>
      </Router>
    
     
    </div>
    </Provider>
  );
}

export default App;
