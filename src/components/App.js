import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Register from './register/Register';
import Login from './Login';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/Register" component={Register} />
                        <Route exact path="/Login" component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

