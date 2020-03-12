import React from 'react';
import Login from './Login';
import Navbar from './Navbar';


class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Login />
            </div>
        );
    }
}

export default App;

