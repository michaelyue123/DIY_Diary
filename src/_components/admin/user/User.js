import React, { Component } from 'react';
import '../../styles/admin/User.css';
import { validateForm, validEmailRegex, validUsernameRegex } from '../../customer/register/RegValidate';
import Popup from "reactjs-popup";
import { Button} from 'react-bootstrap';
import CommonReg from '../../customer/register/CommonReg';
import RegSubmit from '../../customer/register/RegSubmit';
import { adminActions, alertActions } from '../../../_actions';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import { userConstants } from '../../../_constants'

const customStyles = {
    headRow: {
        style: {
            border: 'larger',
        },
    },
    headCells: {
        style: {
            color: '#202124',
            fontSize: '14px',
        },
    },
    rows: {
        highlightOnHoverStyle: {
            backgroundColor: 'rgb(230, 244, 244)',
            borderBottomColor: '#FFFFFF',
            borderRadius: '25px',
            outline: '1px solid #FFFFFF',
        },
    },
    pagination: {
        style: {
            border: 'none',
        },
    },
};

const pageOptions = [10];

class User extends Component{

    constructor(props){
        super(props);

        this.state = {
            users: [],
            loading: true,
            role: '1',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            checked: false,
            errors: {
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
            columns: [
                { name: 'User ID', selector: 'id', sortable: true, right: false },
                { name: 'Name', selector: 'name', sortable: true, right: false },
                { name: 'Email', selector: 'email', sortable: true, right: false },
                { name: 'Phone', selector: 'phone', sortable: true, right: false },
                { name: 'Street', selector: 'addressStreet', sortable: true, right: false },
                { name: 'Suburb', selector: 'addressSurburb', sortable: true, right: false },
                { name: 'Postcode', selector: 'addressPostcode', sortable: true, right: false },
                { name: 'State', selector: 'addressState', sortable: true, right: false },
                { name: 'User Status', selector: 'active', sortable: true, right: false, 
                    cell: (row) => {
                        return row.active? "Active": "Blocked"
                    }
                },
                { 
                    cell: (row) => {
                        return row.active?
                            <Button variant="danger" id={`${row.id}-ba-btn`} style={{"cursor":"pointer"}} onClick={()=>{this.changeActive(row, false)}}>Block</Button>:
                            <Button variant="success" id={`${row.id}-ac-btn`} style={{"cursor":"pointer"}} onClick={()=>{this.changeActive(row, true)}}>Active</Button>
                    },
                    ignoreRowClick: true,
                    allowOverflow: true
                },
                { 
                    cell: (row) => {
                        return <Button variant="info" id={`${row.id}-detail-btn`} style={{"cursor":"pointer"}} onClick={()=>{this.goToDetail(row)}}>Details</Button>
                    },
                    ignoreRowClick: true,
                    allowOverflow: true
                },
              ]
        };

        this.receiveUsers = this.receiveUsers.bind(this);
        
    }

    componentWillMount(){
        this.receiveUsers();
    }

    receiveUsers = async() => {

        let users = await adminActions.getAllUsers(this.props.user)

        if (users){
            this.setState({
                users: users,
                loading: false
            });
        }else{
            this.setState({
                loading: false
            });
        }

    }

    changeActive = (data, status) => {
        alertActions.show_warning("Are you sure to "+(status?"active":"block")+" the user?", "", "Yes, "+(status?"active":"block")+" it.", true, 0, async (isConfirm)=>{
            if (isConfirm.value){
                let result = await adminActions.changeActive(data, status)
                console.log(result)
                if (result.resultCode == 0){
                    alertActions.show_success("You "+(status?"active":"block")+" the user.", "", true, 0, ()=>{this.receiveUsers()});
                }else{
                    alertActions.show_error(result.message, "", null)
                }
            }
        }, null)

    }

    goToDetail = (target_user) => {
        this.props.goToDetail(target_user);
        this.props.history.push("/admin/user_details");
    }

    onClick = () => this.setState({ checked: !this.state.checked });

    onInputChange = async (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                errors.email = validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid';
                break;
            case 'password':
                 errors.password = value.length < 8
                    ? 'Password must be 8 characters long!'
                    : '';
                break;
            case 'confirmPassword':
                errors.confirmPassword = value !== this.state.password
                    ? 'Password entered is inconsistent with previous input!'
                    : '';
                break;
            case 'username':
                errors.username = validUsernameRegex.test(value)
                    ? ''
                    : 'Please enter alphabetical character with first letter uppercase!';
                break;
            default:
                break;
        }
        await this.setState({ errors, [name]: value });
    }

    onFormSubmit = async (e) => {
        e.preventDefault();
        const { email, password, confirmPassword, username, checked, errors, role} = this.state;
        
        console.log(this.state)

        if(email !== '' && password !== '' && confirmPassword !== '' && username !== '') {
            console.log(errors)
            console.log(validateForm(errors))
            if(validateForm(errors)) {
                if(checked) {
                    console.log("IN")
                    adminActions.registerAdmin(role?role:2, username, email, password);
                }else {
                    this.props.waringAlert("Oops...", 'Please make sure you\'ve checked the box!')
                }
            }else {
                this.props.waringAlert("Oops...", 'Please make sure details you\'ve entered are correct!')
            }
        }else {
            this.props.waringAlert("Oops...", 'Please fill in all required details above!')
        }
    }

    showPopup = () => {
        const { errors } = this.state;
        return <Popup trigger={<Button className="menu-button" variant="light" type="button" value="add_admin">Add Admin</Button>}
                    modal
                    closeOnDocumentClick
                    style={{"border-radius": "18px"}}
                >
                    {(close)=>(
                            <div id="pop_model">
                                <a id="pop_close" onClick={close}>
                                    &times;
                                </a>
                                <div id="pop_header" style={{}}> 
                                    <span>   
                                        Add An Administrator
                                    </span>
                                </div>
                                <div id="pop_content">
                                    <form onSubmit={this.onFormSubmit} noValidate className="ui form">
                                        <CommonReg 
                                            errors={errors} 
                                            onInputChange={this.onInputChange}
                                        />
                                        <RegSubmit  onClick={this.onClick}/>
                                    </form>
                                </div>
                            </div>
                    )}
                </Popup>;
    }

    render(){
        return(
            //class="text-center"
            <div>
                <div style={{"marginTop":"2%"}}>
                    {this.showPopup()}
                </div>
                <div style={{"marginTop":"2%"}} className="content" id="orderListDiv">
                    <div className="table-responsive">
                        <DataTable
                            title="Users"
                            columns={this.state.columns}
                            data={this.state.users}
                            pagination
                            progressPending = {this.state.loading}
                            paginationRowsPerPageOptions={pageOptions}
                            highlightOnHover
                            customStyles={customStyles}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const actionCreators = (dispatch) => {
    return {
        waringAlert: alertActions.error,
        goToDetail: (user) => { dispatch({ type: userConstants.DETAIL, user })}
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.authentication.user,
        role: state.authentication.role,
        target_user: state.editProfileReducer.target_user
    };
}

export default connect(mapStateToProps, actionCreators)(User);