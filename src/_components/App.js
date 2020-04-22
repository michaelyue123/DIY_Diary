import React from 'react';
import { Switch, Route, withRouter, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Register from './customer/register/Register';
import Login from './customer/login/Login';
import Content from './customer/content/Content';
import PageNotFound from './PageNotFound';
import ProtectedRoute from './ProtectedRoute';
import AdminHome from './admin/AdminHome';
import User from './admin/user/User';
import Diary from './admin/diary/Diary';
import Report from './admin/report/Report';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            
            <Router> 
                <div> 
                    <NavBar />
                    <Switch>
                        <Route exact path="/" render={(props) => {
                            if(this.props && this.props.authentication && this.props.authentication.user 
                                && this.props.authentication.user.id.substring(0,1) =="a") {
                                return <AdminHome {...props} />;
                            }else {
                                return <Home {...props} />;
                            }
                        }}/>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <ProtectedRoute exact path="/content" component={Content} />
                        <ProtectedRoute exact path="/admin" component={AdminHome} />
                        <Route path='*' component={PageNotFound} />
                    </Switch> 
                </div> 
            </Router>   
        );
    }
}

const mapStateToProps = (state) => ({ 
    authentication: state.authentication
})

export default connect(mapStateToProps)(App);

