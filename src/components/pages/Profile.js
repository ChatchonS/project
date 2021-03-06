import { Button } from 'antd';
import React from 'react';
import LocalStorageService from '../../services/localStorageService';
import {Link} from 'react-router-dom';

export default function Profile(props) {

    const logout = () => {
        LocalStorageService.removeToken();
        props.setRole("guest");
    };


    return (
        <div>
            <h2>
                Profile Page
            </h2>
            <p>
                <strong>Name:</strong> Sonter
                <br />
                <strong>User ID:</strong> 15
            </p>
            <Link to="/todo"><Button>Goto todo</Button></Link> 
            <Button onClick= {logout}>Logout</Button>
        </div>
    );
}
