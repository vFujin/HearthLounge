import React, {Component} from 'react';

import UserDetails from './details/user';
import HearthstoneDetails from './details/hearthstone';
import SocialMediaDetails from './details/social-media';

export class Sidebar extends Component{
  constructor(props){
    super(props);

    this.state = {
      editing_details: false,
      editing_hearthstone: false,
      editing_social_media: false
    }
  }

  handleEditClick(e){
    let target = e.target.id;
    console.log(target);
    this.setState({
      [target]: true
    })
  }

  render() {
    const {email, username} = this.props;
    return (
        <div className="sidebar">
          <h3 className="sidebar__header">Profile</h3>

          <ul className="sidebar__body">
            <li className="about">
              <div className="avatar"><img src="http://lorempixel.com/100/100/cats/" alt="cat"/></div>
              <div className="username">{username}</div>
            </li>

            <UserDetails email={email} isEditing={this.state.editing_details} handleEditClick={(e)=>this.handleEditClick(e)}/>
            <HearthstoneDetails isEditing={this.state.editing_hearthstone} handleEditClick={(e)=>this.handleEditClick(e)}/>
            <SocialMediaDetails isEditing={this.state.editing_social_media} handleEditClick={(e)=>this.handleEditClick(e)}/>
          </ul>
        </div>
    );
  }
}