import React, { Component } from 'react';

class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textEntry: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const value = event.target.value;

        this.setState({
                textEntry: value
            
        })
    }
    handleSubmit(event){ 
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
                autoComplete='off'
                value={this.state.textEntry}
                onChange={this.handleChange}
            />
            <button
                className='button'
                type='button'
                onClick={this.handleSubmit}>
                    Save
            </button>
            
        </div>  
    )
  }
}

export default Entry;