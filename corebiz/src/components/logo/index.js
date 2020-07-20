import React from 'react';
import logo from '../../assets/images/logo.svg'

export default class Logo extends React.Component {
    render() {
        let {
            width = null,
            height = null,
        } = this.props;
        
        return (
            <img src={logo} alt="Logo" width={width} height={height} />
        );
    }
}