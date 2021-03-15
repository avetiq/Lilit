import './App.css';
import Search from './components/pages/Search';
import Result from './components/pages/Result';
import NavMenu from './components/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <NavMenu />

      <Switch>
      <Route 
       path='/'
       component = {Search}
       exact = {true}
      />
      <Route 
       path='/result/:hotel?/:view?/:district?/:bed?/:from?/:to?'
       component = {Result}
       exact = {true}
      />
      
      <Redirect to='/not-found'/>
      </Switch>

    </BrowserRouter>
    </div>
  );
}

export default App;
