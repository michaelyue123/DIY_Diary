import React, { Component } from 'react'
import '../../styles/customer/Diary/DiaryContent.css';
import { FormControl, InputGroup, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { diaryConstants } from '../../../_constants/diary.constants';
import { connect } from 'react-redux';
import { commonActions } from '../../../_actions/common.action';
import { alertActions } from '../../../_actions';



export class DiaryContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            paper_color: [],
            paper_type: [],
            select_paperColor: '',
            select_paperType: '',
            select_paperType_id: '',
            select_paperColor_id: ''
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

        this.setState({
            paper_color: parameters.paperColor,
            paper_type: parameters.paperType
        });

    }

    onSubmitUpdate = async () => {
        const { select_paperColor, select_paperType } = this.state;
        if(select_paperColor === '' || select_paperType === '') {
            alertActions.show_warning("You haven't selected anything. Are you sure to continue?", "", "Yes, continue", true, 0, async (isConfirmed) => {
                if(isConfirmed.value) {
                    await this.props.updateInfo(this.state);
                    alertActions.show_success("Update Successfully", "", false, 1500, null);
                    this.props.history.push("/payment");
                }
            }, null);
        } else {
            await this.props.updateInfo(this.state);
            alertActions.show_success("Update Successfully", "", false, 1500, null);
            this.props.history.push("/payment");
        }
    }

    
    render() {
        const { paper_color, paper_type, select_paperColor } = this.state;

        return (
            <div >
                <div style={{ backgroundColor: select_paperColor}} className="diary content">
                    <InputGroup className="mb-3">
                        <FormControl
                            className="inputbox"
                            placeholder="Entry Title"
                            aria-label="Title"
                            style={{ backgroundColor: select_paperColor}}
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    
                    <Form.Control style={{ backgroundColor: select_paperColor}} className="textbox" placeholder="Your entry here" as="textarea" rows="13" />   
                </div>
                <div className="flex-container-one">
                    {
                        paper_color.map((option) => {
                            return <option key={option.id} onClick={() => this.setState({select_paperColor: option.description.replace(" ",""), select_paperColor_id: option.id})}  style={{backgroundColor: option.description.replace(" ","")}} />
                        })
                    }
                </div>

                <Form className="paper type">
                    <Form.Group controlId="user_state">
                        <Form.Label style={{color: 'aliceblue', marginBottom: '15px'}}>Please select a paper type </Form.Label>
                        <Form.Control as="select" custom="true">
                            { 
                                paper_type.map((option) => 
                                <option key={option.id} className="select list" onClick={() => this.setState({select_paperType: option.description, select_paperType_id: option.id})} value={option.description}>{option.description}</option>)
                            }
                        </Form.Control>                      
                    </Form.Group>

                    <Button onClick={this.onSubmitUpdate} className="ui button" id="content-button" type="button">
                        Submit
                    </Button>
                    <Button onClick={() => this.props.history.push('/myDiary')} className="ui button" id="content-button" type="button">
                        Cancel
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingcart: state.shoppingcart.diarysettings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateInfo: (diary) => { dispatch({ type: diaryConstants.UPDATE_DIARY, diary })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiaryContent);
