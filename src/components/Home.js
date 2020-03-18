import React from 'react';
import './styles/Home.css';

const Home = () => {
    return (
        <div>
            <h1 className="ui home">Welcome to the DIY Diary!</h1>
            <p id="text1"> Create and Customise your own diary on the fly</p>
            <img id="universe" alt="Universe" src={require('./images/1.jpg')} />
        </div>
    );
}

export default Home;