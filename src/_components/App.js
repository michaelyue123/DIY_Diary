import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Register from './customer/register/Register';
import Login from './customer/login/Login';
import Content from './customer/content/Content';
import PageNotFound from './PageNotFound';
import ProtectedRoute from './ProtectedRoute';
import AdminHome from './admin/AdminHome';
import User from './admin/user/User'
import Diary from './admin/diary/Diary'
import Report from './admin/report/Report'
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <Router> 
                <div> 
                    <NavBar />
                    <Switch>
                        <Route exact path="/" render={(props) => {
                            if(this.props && this.props.role && this.props.role === 1) {
                                return <AdminHome {...props} />;
                            }else {
                                return <Home {...props} />;
                            }
                        }}/>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <ProtectedRoute exact path="/content" component={Content} />
                        <ProtectedRoute exact path="/admin" component={AdminHome} />
                        <ProtectedRoute exact path="/admin/user" component={User} />
                        <ProtectedRoute exact path="/admin/diary" component={Diary} />
                        <ProtectedRoute exact path="/admin/report" component={Report} />
                        <Route path='*' component={PageNotFound} />
                    </Switch> 
                </div> 
            </Router>   
        );
    }
}

const mapStateToProps = (state) => ({ 
    user: state.authentication.user, 
    role: state.authentication.role
})

export default connect(mapStateToProps)(App);

