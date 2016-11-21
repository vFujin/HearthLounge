/**
 * Created by TERMINATOR on 21.11.2016.
 */
import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../../App.css';
import {Navbar} from './navbar';

export class Homepage extends Component {
    render() {
        return (
            <div className="header">
                <Navbar />
            </div>
        );
    }
}