import React, { Component } from 'react';

class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textEntry: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const value = event.target.value;

        this.setState(function (){
            return {
                textEntry: value
            }
        })
    }
    handleSubmit(event){ 
        //set up an object so that we can send it.
        //store to server (API call)
    }
    render() {
        return (
        <form onSubmit={this.handleSubmit}> 
            <input 
                type='text'
                autoComplete='off'
                value={this.state.textEntry}
                onChange={this.handleChange}
            />
            <button
                className='button'
                type='submit'>
                    Save
            </button>
            
        </form>  
    )
  }
}

export default Entry;