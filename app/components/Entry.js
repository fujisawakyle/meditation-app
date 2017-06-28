const React = require('react');

class Entry extends React.Component {
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
        //store to server
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

module.exports = Entry;