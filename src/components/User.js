import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class User extends Component{
    render (){
        const {name} = this.props;
        return <div>
            Hello {name} 
        </div>
    }
}


User.propTypes = {
    name: PropTypes.string.isRequired
}