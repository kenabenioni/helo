import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';


function Nav (props) {
    console.log(props);
    if(props.location.pathname === '/'){
        return (
            <div></div>
        )
    } else {

        return (
            <div>
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
        


export default withRouter(Nav);