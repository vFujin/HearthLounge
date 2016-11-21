import React, { Component } from 'react';
import {Navbar} from './navbar';

export class Home extends Component {
    render() {
        return (
            <div className="header">
                <Navbar />
            </div>
        );
    }
}