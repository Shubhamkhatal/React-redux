import {Provider} from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './redux/store'
import './App.css';
import Home from './pages/Home';
import Adduser from './pages/Adduser';
import Edituser from './pages/Edituser';


function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/adduser'>
          <Adduser/>
          </Route>
          <Route exact path='/edituser/:id'>
          <Edituser/>
          </Route>
        </Switch>
    </Router>
    </Provider> 



{/* <Provider store={store}>
    <Router>
      <Switch>
      <Route path="/Home">
        <Home addUser={'/addUser'}/>
        </Route>
      </Switch>
    </Router>
  </Provider> */}


    </>
    
  );
}

export default App;
