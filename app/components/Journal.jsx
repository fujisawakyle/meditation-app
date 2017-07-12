import React, { Component } from 'react';
import Entry from './Entry';

const style = {
    journalBox : {
        backgroundColor: '#adf',
        height: '400px',
        width: '200px',
        textAlign: 'center',
        margin: 'auto',
        border: '1px solid black',
        borderRadius: '10px'
    }
}

class Journal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
       
    }
    render() {
        return (
        <div style={style.journalBox}> 
            <h3>Journal</h3>
            <Entry />
        </div>  
    )
  }
}

export default Journal;