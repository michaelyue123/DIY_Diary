import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Register from './register/Register';
import Login from './login/Login';
import Content from './content/Content';
import PageNotFound from './PageNotFound';
import ProtectedRoute from './ProtectedRoute';
import { CookiesProvider } from 'react-cookie';
import { withCookies } from 'react-cookie';



// const MyContext = React.createContext();

// // provider component
// class MyProvider extends Component {
//     state = {
//         isLoggedIn: false,

//     }
//     render() {
//         return (
//             <MyContext.Provider value={{
//                 state: this.state
//             }}>
//                 {this.props.children}
//             </MyContext.Provider>
//         );
//     }
// }

class App extends React.Component {

    // update parent's data via callback function is child
    // onLoginChange= async (isLoggedin) => {
    //     await this.setState({ isLoggedi: isLoggedin});
    // }

    render() {
        return (
            <CookiesProvider>
                <Router>   
                    <div> 
                        <NavBar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <ProtectedRoute 
                                exact 
                                path="/content" 
                                render={() => (<Content cookies={this.props.cookies} />)} 
                            />
                            <Route path='*' component={PageNotFound} />
                        </Switch> 
                    </div> 
                </Router>  
            </CookiesProvider>
        );
    }
}

export default withCookies(App);

