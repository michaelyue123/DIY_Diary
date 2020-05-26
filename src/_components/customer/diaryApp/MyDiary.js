import React, { Component } from 'react';
import '../../styles/customer/Diary/MyDiary.css';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { diaryConstants } from '../../../_constants/diary.constants';
import { commonActions } from '../../../_actions/common.action';

class MyDiary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            cover_color: [],
            select_coverColor: 'LightBlue',
            select_coverColor_id: ''
        }

        this.getParameters = this.getParameters.bind(this);
    }

    componentDidMount(){
        this.getParameters();
    }

    getParameters = async() => {
        var parameters = await commonActions.getParameters();

        parameters.coverColor.map((option)=>{
            return option.isChecked = false
        })

        this.setState({
            cover_color: parameters.coverColor
        });

    }

    onInputChange = async (e, symbol) => {
        e.preventDefault();
        await this.setState({ 
            title: symbol === 'title' ? e.target.value:this.state.title,     
        });    
    }

    onClickChange = async () => {
        await this.props.updateInfo(this.state);
        this.props.history.push('/diaryContent');
    }


    render() {
        const { title, cover_color, select_coverColor } = this.state;
        
        return (
            <div>
                <div style={{ backgroundColor: select_coverColor}} className="app container">
                    <h1 className="diary title">{title}</h1>
                </div>
                <div className="flex-container">
                    {
                        cover_color.map((option) => {
                            return <option key={option.id} onClick={() => this.setState({select_coverColor: option.description.replace(" ",""), select_coverColor_id: option.id})}  style={{backgroundColor: option.description.replace(" ","")}} />
                        })
                    }
                    
                </div>

                <Form className="diary cover">
                    <Form.Label style={{color: 'aliceblue', marginBottom: '15px'}}>Please enter a text for diary title</Form.Label>
                    <div className="text box">
                        <Form.Control 
                            className="cover text" 
                            type="text" 
                            placeholder="text on the cover"
                            onChange={(e)=> this.onInputChange(e, 'title')} 
                        />
                    </div>

                    <Button onClick={this.onClickChange} className="ui button" id="personal" type="submit">
                        Next
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

export default connect(mapStateToProps, mapDispatchToProps)(MyDiary);
