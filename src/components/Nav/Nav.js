import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';



function Nav (props) {
    console.log(props);
    if(props.location.pathname === '/'){
        return (
            <div></div>
        )
    } else {

        return (
            <div>
                <p>{props.username}</p>
                <img src={props.profilepic} alt=""/>
                <Link to={'/dashboard'}>
                <button>Home</button>
                </Link>
                <Link to={'/new'}>
                <button>New Post</button>
                </Link>
                <Link to={'/'}>
                <button>Logout</button>
                </Link>
            </div>
        )
    }
    }
    // function mapStateToProps (state){
    //     return {
    //         username: state.username,
    //         profilepic: state.profilepic
    //     }
    // }
        


export default /*connect(mapStateToProps)*/(withRouter(Nav));