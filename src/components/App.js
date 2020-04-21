import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Register from './register/Register';
import Login from './login/Login';
import Content from './content/Content';
import PageNotFound from './PageNotFound';
import ProtectedRoute from './ProtectedRoute';
import AdminHome from './admin/AdminHome';
import User from './admin/user/User';
import Diary from './admin/diary/Diary';
import Report from './admin/report/Report';


class App extends React.Component {
    render() {
        return (
            <Router>   
                <div> 
                    <NavBar />
                    <Switch>
                        <Route exact path="/" render={(props) => {
                            if(false) {
                                return <Home {...props} />;
                            }else {
                                return <AdminHome {...props} />;
                            }
                        }}/>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <ProtectedRoute exact path="/content" component={Content} />
                        <Route exact path="/admin" component={AdminHome} />
                        <Route exact path="/admin/user" component={User} />
                        <Route exact path="/admin/diary" component={Diary} />
                        <Route exact path="/admin/report" component={Report} />
                        <Route path='*' component={PageNotFound} />
                    </Switch> 
                </div> 
            </Router>   
        );
    }
}

export default App;

