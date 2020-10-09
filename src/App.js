import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#4dabf5',
			main: '#2196f3',
			dark: '#1769aa',
			contrastText: '#fff'
		}
	}
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/" component={Home}/>
            </Switch>
          </div>
        </Router>
     </MuiThemeProvider>
  );
}

export default App;
