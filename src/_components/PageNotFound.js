import React from 'react';
import imageNotFound from './images/404.jpg';
import './styles/PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <img id="notfound" src={imageNotFound} alt="" />
            <Link className="alert-link" to="/">
                Back to Home Page
            </Link>
        </div>
    );
}

export default PageNotFound;