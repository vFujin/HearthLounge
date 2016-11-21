/**
 * Created by TERMINATOR on 21.11.2016.
 */
import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../../App.css';
import { navItems } from '../../items/nav-elements';

export class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    {navItems.map( (name, index) => <li key={index}>{name.name}</li> )}
                </ul>
            </nav>
        );
    }
}
