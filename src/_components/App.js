import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Register from './customer/register/Register';
import Login from './common/Login';
import Profile from './customer/content/Profile';
import Content from './customer/content/Content';
import OrderHistory from './customer/content/OrderHistory';
import Payment from './customer/payment/Payment';
import MyDiary from './customer/diaryApp/MyDiary';
import PageNotFound from './PageNotFound';
import ProtectedRoute from './ProtectedRoute';
import AdminHome from './admin/AdminHome';
import User from './admin/user/User'
import DiaryM from './admin/diary/Diary'
import ParametersOperations from './admin/diary/sub_pages/ParametersOperation'
import OrderOperation from './admin/diary/sub_pages/OrderOperation'
import ReviewOperation from './admin/diary/sub_pages/ReviewOperation'
import Report from './admin/report/Report'
import UserDetails from './admin/user/UserDetails'
import { connect } from 'react-redux';
import DiaryContent from './customer/diaryApp/DiaryContent';

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
                        <ProtectedRoute exact path="/profile" component={Profile} />
                        <ProtectedRoute exact path="/payment" component={Payment} />
                        <ProtectedRoute exact path="/order_history" component={OrderHistory} />
                        <ProtectedRoute exact path="/myDiary" component={MyDiary} />
                        <ProtectedRoute exact path="/diaryContent" component={DiaryContent} />
                        <ProtectedRoute exact path="/admin" component={AdminHome} />
                        <ProtectedRoute exact path="/admin/user" component={User} />
                        <ProtectedRoute exact path="/admin/diary" component={DiaryM} />
                        <ProtectedRoute exact path="/admin/diary/parameters" component={ParametersOperations} />
                        <ProtectedRoute exact path="/admin/diary/orders" component={OrderOperation} />
                        <ProtectedRoute exact path="/admin/diary/reviews" component={ReviewOperation} />
                        <ProtectedRoute exact path="/admin/report" component={Report} />
                        <ProtectedRoute exact path="/admin/user_details" component={UserDetails} />
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

