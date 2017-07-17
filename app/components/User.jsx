import React, {Component} from 'react';
import Calendar from './Calendar';

const data = {
    users: {
        Kyle: {
                '2017,6,13': {
                    journal: 'Wonderful time',
                    meditationDuration: '5'
                },    
                '2017,6,14': {
                    journal: 'Had a revelation',
                    meditationDuration: '7'
                },
                '2017,6,10': {
                    journal: 'Positivity is within',
                    meditationDuration: '10'
                },
                '2017,6,15': {
                    journal: 'Tap into the source',
                    meditationDuration: '12'
                },
                '2017,6,16': {
                    journal: 'Kindness is key',
                    meditationDuration: '35'
                }
        }
    }
}

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        userData: data.users[this.props.username]
    };
  }

    

  render() {
    return (
        <div>
            <h2>Hello, {this.props.username}</h2>
            <Calendar userData={this.state.userData}/>
        </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default User;
