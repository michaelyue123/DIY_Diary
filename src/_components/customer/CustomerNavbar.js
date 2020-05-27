import React from 'react';
import '../styles/Navbar.css';
import { Link, withRouter } from 'react-router-dom';
import Logout from '../common/Logout';
import { connect } from 'react-redux';


const CustomerNavbar = (props) =>  {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div><Link className="navbar-brand" to="/">Panda Diary</Link></div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link" to="/register">
                                    Register
                                </Link>
                                <Link className="nav-item nav-link" to="/login">
                                    Sign in 
                                </Link>  
                                <Link className="nav-item nav-link" to="/content">
                                    Content
                                </Link>   
                                <Link className="nav-item nav-link" to="/payment">
                                    Payment
                                </Link>  
                                <Link className="nav-item nav-link" to="/myDiary">
                                    My Diary
                                </Link>    
                            </div>
                        </div>
                    </nav>
                </div>
                {
                    props.user ? <Logout /> : <div></div>
                }
            </nav>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        user: state.authentication.user
    }
}

export default withRouter(connect(mapStateToProps)(CustomerNavbar));

