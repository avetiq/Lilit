import './App.css';
import Search from './components/pages/Search';
import Result from './components/pages/Result';
import Hotel from './components/pages/Hotel';
import View from './components/pages/View';
import NavMenu from './components/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  
});


function App() {
  
  return (
    <ThemeProvider theme={theme}>
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
       path='/result'
       component = {Result}
       exact = {true}
      />
      <Route 
       path='/result/hotel'
       component = {Hotel}
       exact = {true}
      />
      <Route 
       path='/result/view'
       component = {View}
       exact = {true}
      />

      <Redirect to='/not-found'/>
      </Switch>

    </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
