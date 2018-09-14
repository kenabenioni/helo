import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUserName, getUserId, getProfilePic} from '../../ducks/reducer'
import './Auth.css';


class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            id: '',
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
            console.log(response.data[0])
            this.props.getUserName(response.data[0].username)
            this.props.history.push('/dashboard')
        })
    }
    loginUser(){
        axios.post('/api/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then((response)=>{
            console.log(response.data[0])
            this.props.getUserName(response.data[0].username)
            this.props.history.push('/dashboard')
        })
    }
    

    render(){
        return (
            <div className='Auth'>
            <div className="Auth-inner">
            <img src='https://github.com/DevMountain/simulation-3/blob/master/assets/helo_logo.png?raw=true' alt=""/>
                <h1 className="helo">HELO</h1>
                <p>Username:</p><input onChange={this.handleName} type="text"/>
                <p>Password:</p><input onChange={this.handlePassword} type="text"/>
                <div className="buttons">
                <button onClick={this.loginUser}>Login</button>
                <button onClick={this.registerUser}>Register</button>
                </div>
            </div>
            </div>
        )
    }
}
export default connect(null, {getUserName, getUserId, getProfilePic})(Auth);