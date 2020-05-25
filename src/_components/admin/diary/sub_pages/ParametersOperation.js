import React, { Component } from 'react'
import '../../../styles/admin/ParametersOperation.css';
import DiaryNavButton from '../DiaryNavButton';
import { commonActions, alertActions, adminActions} from '../../../../_actions';
import { Form, Button} from 'react-bootstrap';
import Add from '../../../images/add.png';
import Recover from '../../../images/recover.png';
import Delete from '../../../images/delete.png';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';

class ParametersOperation extends Component{

    constructor(props){
        super(props);

        this.state = {
            params_pc: [],
            params_pt: [],
            params_cc: [],
            add_text: ""
        }

        this.getParameters = this.getParameters.bind(this);
    }

    componentDidMount(){
        this.getParameters();
    }

    getParameters = async() => {
        var parameters = await commonActions.getParameters();

        parameters.paperColor.map((option)=>{
            return option.isChecked = false
        })
        parameters.paperType.map((option)=>{
            return option.isChecked = false
        })
        parameters.coverColor.map((option)=>{
            return option.isChecked = false
        })

        this.setState({
            params_pc: parameters.paperColor,
            params_pt: parameters.paperType,
            params_cc: parameters.coverColor
        });

    }

    selectOptions = async (target, action) =>{

        var target_arr;

        if (action === 'pc'){
            target_arr = this.state.params_pc;
        }else if (action === 'pt'){
            target_arr = this.state.params_pt;
        }else if (action === 'cc'){
            target_arr = this.state.params_cc;
        }

        target_arr.map((option)=>{
            if (option.description === target.option.description){
                option.isChecked = !option.isChecked
            }
        })

        await this.setState({
            params_pc: action === 'pc'?target_arr:this.state.params_pc,
            params_pt: action === 'pt'?target_arr:this.state.params_pt,
            params_cc: action === 'cc'?target_arr:this.state.params_cc
        });
    } 

    addParameters = async (target, close) => {

        if(this.state.add_text){
            switch(target){
                case 'paperColor':
                    for (var i =0 ; i<this.state.params_pc.length; i++){
                        if (this.state.params_pc[i].description.toLowerCase()===this.state.add_text.toLowerCase()){
                            alertActions.show_error("Duplicated.", "We have the option already. Please try another one.", null);
                            return;
                        }
                    }
                    break;
                    case 'paperType':
                        for (var i =0 ; i<this.state.params_pt.length; i++){
                            if (this.state.params_pt[i].description.toLowerCase()===this.state.add_text.toLowerCase()){
                                alertActions.show_error("Duplicated.", "We have the option already. Please try another one.", null);
                                return;
                            }
                        }
                        break;
                    case 'coverColor':
                        for (var i =0 ; i<this.state.params_cc.length; i++){
                            if (this.state.params_cc[i].description.toLowerCase()===this.state.add_text.toLowerCase()){
                                alertActions.show_error("Duplicated.", "We have the option already. Please try another one.", null);
                                return;
                            }
                        }
                    break;
            }

            let newOption = await adminActions.updateDiaryParameters(this.props.user.id, target, this.state.add_text, function(){close()});
            newOption.isChecked = false
            if (newOption){
                this.getParameters();
            }

        }else{
            alertActions.show_info("No option to add.","",close())
        }
    }

    onInputChange = (e) => {
        this.setState({
            add_text: e.target.value
        });
    }

    deleteParameters = async (target) => {
        var temp_arr = [];
        switch(target){
            case 'paperColor':
                this.state.params_pc.map((option)=>{
                    if (option.isChecked){
                        temp_arr.push(option);
                    }
                })
                break;
            case 'paperType':
                this.state.params_pt.map((option)=>{
                    if (option.isChecked){
                        temp_arr.push(option);
                    }
                })
                break;
            case 'coverColor':
                this.state.params_cc.map((option)=>{
                    if (option.isChecked){
                        temp_arr.push(option);
                    }
                })
                break;
        }

        if (temp_arr.length === 0){
            alertActions.show_info("No option to delete.","",null);
            return;
        }else{
            let result = await adminActions.deleteDiaryParameters(this.props.user.id, target, temp_arr);
            if (result){
                this.getParameters();
            }
        }
    }

    recoverParameters = async (target) => {
        console.log(target);
        var temp_arr = [];
        switch(target){
            case 'paperColor':
                this.state.params_pc.map((option)=>{
                    if (!option.active && option.isChecked){
                        temp_arr.push(option);
                    }
                })
                break;
            case 'paperType':
                this.state.params_pt.map((option)=>{
                    if (!option.active && option.isChecked){
                        temp_arr.push(option);
                    }
                })
                break;
            case 'coverColor':
                this.state.params_cc.map((option)=>{
                    console.log(option);
                    if (!option.active && option.isChecked){
                        temp_arr.push(option);
                    }
                })
                break;
        }

        if (temp_arr.length === 0){
            alertActions.show_info("No option to recover.","",null);
            return;
        }else{
            let result = await adminActions.recoverDiaryParameters(this.props.user.id, target, temp_arr);
            if (result){
                this.getParameters();
            }
        }
    }

    showPopup = (target) => {
        return <Popup trigger={<img className="params_icon" src={Add} id={`${target}-add`} style={{"cursor":"pointer"}}/>}
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
                                    {(() => {
                                        switch (target) {
                                        case "paperColor":   return "Add A Paper Color Option";
                                        case "paperType":    return "Add A Paper Type Option";
                                        case 'coverColor':   return "Add A Cover Color Option";
                                        default:             return "WRONG";
                                        }
                                    })()}
                                    </span>
                                </div>
                                <div id="pop_content">
                                    <dt className="">
                                        <span>New Option:</span>
                                    </dt>
                                    <dd className="ui input pay_input" style={{width: "60%"}}>
                                        <input
                                            type="text"
                                            name="description"
                                            placeholder='Option Description'
                                            required
                                            onInput={this.onInputChange}
                                        />
                                    </dd>
                                </div>
                                <div id="pop_footer">
                                    <Button className="menu-button" variant="success" type="button" onClick={()=> this.addParameters(target, close)}>
                                        Add
                                    </Button>
                                    <Button className="menu-button" variant="danger" type="button" onClick={close}>
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                    )}
                </Popup>;
    }

    render(){
        return(
            <div className="text-center" >
                <div>
                    <DiaryNavButton  action="parameters"/>
                </div>
                <div style={{"marginTop":"2%"}}>
                    <h1 className="admin_title">Diary Parameters:</h1>
                </div>
                <div className="text-center" >  
                    <div className="admin_params_subbox">
                        <div>
                            <h2 style={{"float":"left"}}>Paper Color: </h2> 
                            {this.showPopup('paperColor')}
                            <img className="params_icon" src={Delete} id='pc-delete' style={{"cursor":"pointer"}} onClick={()=>{this.deleteParameters('paperColor')}}/>
                            <img className="params_icon" src={Recover} id='pc-recover' style={{"cursor":"pointer"}} onClick={()=>{this.recoverParameters('paperColor')}}/>
                        </div>
                        <div style={{"height":"10px"}}/>
                        <hr id="hr" />
                        <div className="content_div">
                            {this.state.params_pc.map((option)=>
                                <Form.Check 
                                    className="params_options" 
                                    label={option.active?option.description:option.description+"(out-of-stock)"} 
                                    value={option} 
                                    type="checkbox" 
                                    checked={option.isChecked}
                                    id={`default-pc-checkbox-${option.id}`} 
                                    onClick={()=>{this.selectOptions({option},'pc')}}
                                />
                            )}
                        </div>
                    </div>
                    <div className="admin_params_subbox">
                        <div>
                            <h2 style={{"float":"left"}}>Cover Color: </h2> 
                            {this.showPopup('coverColor')}
                            <img className="params_icon" src={Delete} id='cc-delete' style={{"cursor":"pointer"}} onClick={()=>{this.deleteParameters('coverColor')}}/>
                            <img className="params_icon" src={Recover} id='cc-recover' style={{"cursor":"pointer"}} onClick={()=>{this.recoverParameters('coverColor')}}/>
                        </div>
                        <div style={{"height":"10px"}}/>
                        <hr id="hr" />
                        <div className="content_div">
                            {this.state.params_cc.map((option)=>
                                <Form.Check 
                                className="params_options" 
                                label={option.active?option.description:option.description+"(out-of-stock)"} 
                                value={option} 
                                type="checkbox" 
                                checked={option.isChecked}
                                id={`default-cc-checkbox-${option.id}`} 
                                onClick={()=>{this.selectOptions({option},'cc')}}
                            />
                            )}
                        </div>
                    </div>
                    <div className="admin_params_subbox">
                        <div>
                            <h2 style={{"float":"left"}}>Paper Type: </h2>
                            {this.showPopup('paperType')} 
                            <img className="params_icon" src={Delete} id='pt-delete' style={{"cursor":"pointer"}} onClick={()=>{this.deleteParameters('paperType')}}/>
                            <img className="params_icon" src={Recover} id='pt-recover' style={{"cursor":"pointer"}} onClick={()=>{this.recoverParameters('paperType')}}/>
                        </div>
                        <div style={{"height":"10px"}}/>
                        <hr id="hr" />
                        <div className="content_div">
                            {this.state.params_pt.map((option)=>
                                <Form.Check 
                                className="params_options" 
                                label={option.active?option.description:option.description+"(out-of-stock)"} 
                                value={option} 
                                type="checkbox" 
                                checked={option.isChecked}
                                id={`default-pt-checkbox-${option.id}`} 
                                onClick={()=>{this.selectOptions({option},'pt')}}
                            />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStatesToProps = (state) => {
    return {
        user: state.authentication.user
    }
}

export default connect(mapStatesToProps)(ParametersOperation);