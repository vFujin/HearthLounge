import React, {Component} from 'react';
import UserDetails from './details/user';
import HearthstoneDetails from './details/hearthstone';
import SocialMediaDetails from './details/social-media';
import DangerZone from './details/danger-zone';

import {updateEmail, updateUserHearthstoneData, updateUserSocialMediaData} from '../../../../server/dashboard';

export class Sidebar extends Component{
  constructor(props){
    super(props);

    this.state = {
      editing_details: false,
      editing_hearthstone: false,
      editing_social_media: false,
      editing_danger_zone: false,

      email: null,
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

  validateState(user, value){
    return  this.state[value] !== null ? this.state[value] : user[value];
  }

  handleSaveClick(e){
    /*
     * Changes will occur after relogging, need to reauthenticate or some other stuff
     */
    let user = this.props.user;
    let target = e.target.id;
    let isActive = this.state[target] === false ? true : false;
    this.setState({
      [`editing_${target}`]: isActive
    });

    const validateInput = (value) => {
      return this.state[value] !== null ? this.state[value] : user[value];
    };

    switch(target){
      case 'details': return updateEmail(this.state.email);
      case 'hearthstone': return updateUserHearthstoneData(user.uid, validateInput('battletag'), validateInput('favourite_class'), validateInput('region'));
      case 'social_media': return updateUserSocialMediaData(user.uid, validateInput('facebook'), validateInput('twitter'), validateInput('twitch'), validateInput('youtube'));
      default: return target;
    }
  }

  handleInputChange(e){
    let target = e.target.id;
    let value = e.target.value;
    console.log(value);
    this.setState({
      [target]: value
    })
  }

  handleSelectChange(v, selector){
    this.setState({
      [selector]: v
    })
  }

  render() {
    const {user} = this.props;
    return (
        <div className="sidebar">
          <h3 className="sidebar__header">Profile</h3>

          <ul className="sidebar__body">
            <li className="about">
              <div className="avatar">{user.photoURL ? <img src={user.photoURL} alt={`${user.username}'s profile`}/> : <span className="hs-icon icon-login"></span>}</div>
              <div className="username">{user.username}</div>
              <div className="prestige">{user.prestige}</div>
            </li>

            <UserDetails user={user}
                         isEditing={this.state.editing_details}
                         handleEditClick={(e)=>this.handleEditClick(e)}
                         handleInputChange={(e)=>this.handleInputChange(e)}
                         handleSaveClick={(e)=>this.handleSaveClick(e)}/>
            <HearthstoneDetails user={user}
                                isEditing={this.state.editing_hearthstone}
                                handleEditClick={(e)=>this.handleEditClick(e)}
                                handleInputChange={(e)=>this.handleInputChange(e)}
                                handleSelectChange={(v, selector)=>this.handleSelectChange(v, selector)}
                                handleSaveClick={(e)=>this.handleSaveClick(e)}/>
            <SocialMediaDetails user={user}
                                isEditing={this.state.editing_social_media}
                                handleEditClick={(e)=>this.handleEditClick(e)}
                                handleInputChange={(e)=>this.handleInputChange(e)}
                                handleSaveClick={(e)=>this.handleSaveClick(e)}/>
            <DangerZone isEditing={this.state.editing_danger_zone}
                        handleEditClick={(e)=>this.handleEditClick(e)}
                        handleSaveClick={(e)=>this.handleSaveClick(e)}/>
          </ul>
        </div>
    );
  }
}