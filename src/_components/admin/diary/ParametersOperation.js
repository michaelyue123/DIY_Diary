import React, { Component } from 'react'
import '../../styles/admin/ParametersOperation.css';
import DiaryNavButton from './DiaryNavButton';
import { commonActions} from '../../../_actions';
import { Form} from 'react-bootstrap';
import Add from '../../../_images/add.png'
import Delete from '../../../_images/delete.png'

class ParametersOperation extends Component{

    constructor(props){
        super(props);

        this.state = {
            params_pc: [],
            params_pt: [],
            params_cc: []
        }

        this.getParameters = this.getParameters.bind(this);
    }

    componentDidMount(){
        this.getParameters();
    }

    getParameters = async() => {
        var parameters = await commonActions.getParameters();

        parameters.paperColor.map((option)=>{
            option.isChecked = false
        })
        parameters.paperType.map((option)=>{
            option.isChecked = false
        })
        parameters.coverColor.map((option)=>{
            option.isChecked = false
        })

        this.setState({
            params_pc: parameters.paperColor,
            params_pt: parameters.paperType,
            params_cc: parameters.coverColor
        });

        console.log(this.state);
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
                            <img className="params_icon" src={Add} style={{"cursor":"pointer"}} />
                            <img className="params_icon" src={Delete} style={{"cursor":"pointer"}}/>
                        </div>
                        <hr id="hr" />
                        <div className="content_div">
                            {this.state.params_pc.map((option)=>
                                <Form.Check 
                                    className="params_options" 
                                    label={option.description} 
                                    value={option} 
                                    type="checkbox" 
                                    id={`default-pc-checkbox-${option.id}`} 
                                    onClick={()=>{this.selectOptions({option},'pc')}}
                                />
                            )}
                        </div>
                    </div>
                    <div className="admin_params_subbox">
                        <div>
                            <h2 style={{"float":"left"}}>Cover Color: </h2> 
                            <img className="params_icon" src={Add} style={{"cursor":"pointer"}}/>
                            <img className="params_icon" src={Delete} style={{"cursor":"pointer"}}/>
                        </div>
                        <hr id="hr" />
                        <div className="content_div">
                            {this.state.params_cc.map((option)=>
                                <Form.Check 
                                className="params_options" 
                                label={option.description} 
                                value={option} 
                                type="checkbox" 
                                id={`default-cc-checkbox-${option.id}`} 
                                onClick={()=>{this.selectOptions({option},'cc')}}
                            />
                            )}
                        </div>
                    </div>
                    <div className="admin_params_subbox">
                        <div>
                            <h2 style={{"float":"left"}}>Paper Type: </h2> 
                            <img className="params_icon" src={Add} style={{"cursor":"pointer"}} />
                            <img className="params_icon" src={Delete} style={{"cursor":"pointer"}}/>
                        </div>
                        <hr id="hr" />
                        <div className="content_div">
                            {this.state.params_pt.map((option)=>
                                <Form.Check 
                                className="params_options" 
                                label={option.description} 
                                value={option} 
                                type="checkbox" 
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

export default ParametersOperation;