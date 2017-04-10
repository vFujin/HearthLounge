import React, {Component} from 'react';
import UserDetails from './details/user';
import HearthstoneDetails from './details/hearthstone';
import SocialMediaDetails from './details/social-media';
import {updateEmail, updateUserHearthstoneData} from '../../../../utils/dashboard-user-settings';

export class Sidebar extends Component{
  constructor(props){
    super(props);

    this.state = {
      editing_details: false,
      editing_hearthstone: false,
      editing_social_media: false,

      email: props.email,
      battletag: null,
      favourite_class: null,
      region: null,
      facebook: null,
      twitter: null,
      twitch: null,
      youtube: null
    };
  }

  handleEditClick(e){
    //either "Edit" or "Cancel" buttons
    let target = e.target.id;
    let isActive = this.state[target] === false ? true : false;
    this.setState({
      [target]: isActive
    });
  }

  handleSaveClick(e){
    let target = e.target.id;
    let isActive = this.state[target] === false ? true : false;
    this.setState({
      [`editing_${target}`]: isActive
    });
    switch(target){
      case 'details': return updateEmail(this.state.email);
      case 'hearthstone': return updateUserHearthstoneData(this.state.battletag, this.state.favouriteclass, this.state.region)
    }
  }


  handleInputChange(e){
    let target = e.target.id;
    let value = e.target.value;
    this.setState({
      [target]: value
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

            <UserDetails email={this.state.email}
                         isEditing={this.state.editing_details}
                         handleEditClick={(e)=>this.handleEditClick(e)}
                         handleInputChange={(e)=>this.handleInputChange(e)}
                         handleSaveClick={(e)=>this.handleSaveClick(e)}/>
            <HearthstoneDetails isEditing={this.state.editing_hearthstone} handleEditClick={(e)=>this.handleEditClick(e)}/>
            <SocialMediaDetails isEditing={this.state.editing_social_media} handleEditClick={(e)=>this.handleEditClick(e)}/>
          </ul>
        </div>
    );
  }
}