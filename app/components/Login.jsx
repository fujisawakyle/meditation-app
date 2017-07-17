import React, {Component}from 'react';
import User from './User';

const style = {
    title : {
        textAlign: 'center',

    }
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '', 
            submit: null
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.password){
            this.setState({
                submit: true
            })
        }
    }

    handleChangeUser = (event) => {
        let username = event.target.value;

        this.setState({
            username: username,
        })
    }

    handleChangePassword = (event) => {
        let password = event.target.value;

        this.setState({
            password: password,
        })
    }
    render() {
      
    let userLogin;
    if (this.state.submit) {
        userLogin = (<div>
            <User username={this.state.username}/>
        </div>)
    } else {
        userLogin = (<div> 
            <h1>Welcome to the Meditation App</h1>
            <input onChange={this.handleChangeUser} type="text" placeholder="username"/>
            <br/><br/>
            <input onChange={this.handleChangePassword} type="password" placeholder="password"/>
            <br/><br/>
            <button onClick={this.handleSubmit}>Login</button>
            </div>)
    }
    return( 
        <div style={style.title}>
            {userLogin}
        </div>
    );
}

  componentDidMount() {
    this.setState({ 
        someKey: 'otherValue' 
    });
  }
}

export default Login;

