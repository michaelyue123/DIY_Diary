import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Register from './register/Register';
import Login from './login/Login';
import Content from './content/Content';
import PageNotFound from './PageNotFound';
import ProtectedRoute from './ProtectedRoute';


class App extends React.Component {
    render() {
        return (
            <Router>   
                <div> 
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <ProtectedRoute exact path="/content" component={Content} />
                        <Route path='*' component={PageNotFound} />
                    </Switch> 
                </div> 
            </Router>   
        );
    }
}

export default App;

