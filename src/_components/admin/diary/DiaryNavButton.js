import React, { Component } from 'react'
import '../../styles/admin/DiaryNavButton.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DiaryNavButton extends Component{

    constructor(props){
        super(props);
        this.state = {
            action: this.props.action
        }
    }

    changeTarget = async (e) =>{
        await this.setState({
            action: e.currentTarget.value
        })
    }


    render(){
        return(
            <div style={{"marginTop":"2%"}}>

                <Link to="/admin/diary/orders">
                    <Button className="menu-button" variant="light" type="button" onClick={this.changeTarget} disabled={this.state.action==="orders"} value="orders">
                    Orders
                   </Button>
                </Link>

                <Link to="/admin/diary/parameters">
                     <Button className="menu-button" variant="light" type="button" onClick={this.changeTarget} disabled={this.state.action==="parameters"} value="parameters">
                        Parameters
                     </Button>
                </Link>
                <Link to="/admin/diary/reviews">
                    <Button className="menu-button" variant="light" type="button" onClick={this.changeTarget} disabled={this.state.action==="reviews"} value="reviews">
                        Reviews
                    </Button>
                </Link>
            </div>
        );
    }
}

export default DiaryNavButton;