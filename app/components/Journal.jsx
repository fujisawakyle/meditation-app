import React from 'react';
import Entry from './Entry';

class Journal extends React.Component {
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
        <div className='journalBox'> 
            <h3>Journal</h3>
            <Entry />
        </div>  
    )
  }
}

export default Journal;