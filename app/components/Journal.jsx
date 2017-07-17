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
    }
    
    render() {
        return (
        <div style={style.journalBox}> 
            <h3>Journal</h3>
            <Entry entry={this.props.entry}/>
        </div>  
    )
  }
}

export default Journal;