
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import {Home} from './components/home'
import Store from './store'
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={Store}>
    <div className="container">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          
         </Switch>
      </Router>
    
     
    </div>
    </Provider>
  );
}

export default App;
