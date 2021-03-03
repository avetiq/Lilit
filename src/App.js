import './App.css';
import Search from './components/Search';
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
       
      

      <Redirect to='/not-found'/>
      </Switch>

    </BrowserRouter>
    </div>
  );
}

export default App;
