import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitJournal} from '../actions/index';

/*make an API call and if the journal associated with this date is empty, then render
blank input field, if filled, display that in the input field.*/

class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textEntry: ''
        }
        
    }
    handleChange = (event) => {
        const value = event.target.value;

        this.setState({
                textEntry: value
            
        })
    }
    handleSubmit = (event) => { 
        event.preventDefault();
        let journalEntry = this.state.textEntry;
        alert('send info: ' + journalEntry);
        //set up an object so that we can send it.
        //store to server (API call)
    }
    render() {
        return (
        <div> 
            <input 
                type='text'
                placeholder="Today's reflections: "
                autoComplete='off'
                value={this.state.textEntry}
                onChange={this.handleChange}
            />
            <button
                className='button'
                type='button'
                onClick={this.handleSubmit}>
                {/*onClick={() => this.props.submitJournal(entry)}*/}
                    Save
            </button>
            
        </div>  
    )
  }
}

function mapStateToProps(state) {
    return {
        entries: state.entries
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({submitJournal: submitJournal}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Entry);