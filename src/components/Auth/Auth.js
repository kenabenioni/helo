import React, {Component} from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleName = this.handleName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.registerUser = this.registerUser.bind(this)
        this.loginUser = this.loginUser.bind(this)
    }

    handleName (e){
        this.setState({username: e.target.value})
    }
    handlePassword (e){
        this.setState({password: e.target.value})
    }
    registerUser(){
        axios.post('/api/register', {
            username: this.state.username,
            password: this.state.password
        })
        .then((response)=>{
            this.props.history.push('/dashboard')
        })
    }
    loginUser(){
        axios.post('/api/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then((response)=>{
            this.props.history.push('/dashboard')
        })
    }
    

    render(){
        console.log(this.state);
        return (
            <div>
                <h1>Auth</h1>
                <p>Username:</p><input onChange={this.handleName} type="text"/>
                <p>Password:</p><input onChange={this.handlePassword} type="text"/>
                <hr/>
                <button onClick={this.loginUser}>Login</button>
                <button onClick={this.registerUser}>Register</button>
            </div>
        )
    }
}
export default Auth;