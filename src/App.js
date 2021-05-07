import './App.css';
import Search from './components/pages/Search';
import Result from './components/pages/Result';
import Hotel from './components/pages/Hotel';
import LogIn from './components/pages/LogIn';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import Register from './components/pages/Register';
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
      <Route 
       path='/contact-us'
       component = {ContactUs}
       exact = {true}
      />
      <Route 
      path='/about-us'
      component = {AboutUs}
      exact = {true}
      />

      <Route 
      path='/register'
      component = {Register}
      exact = {true}
      />
      <Route 
      path='/log-in'
      component = {LogIn}
      exact = {true}
      />

      <Redirect 
      to='/not-found'
      />
      </Switch>

    </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
