import React, {Component} from 'react';
import UserDetails from './details/user';
import HearthstoneDetails from './details/hearthstone';
import SocialMediaDetails from './details/social-media';
import {updateEmail, updateUserHearthstoneData} from '../../../../utils/dashboard-user-settings';
import _ from 'lodash';

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
      case 'details': {
        updateEmail(this.state.email);
        this.setState({
          email: null
        });
        break;
      }
      case 'hearthstone': {
        console.log(this.props.user.uid);
        updateUserHearthstoneData(this.props.user.uid, this.state.battletag, this.state.favourite_class, this.state.region);
        break;
      }
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
              <div className="avatar"><img src="http://lorempixel.com/100/100/cats/" alt="cat"/></div>
              <div className="username">{user.username}</div>
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
            <SocialMediaDetails isEditing={this.state.editing_social_media} handleEditClick={(e)=>this.handleEditClick(e)}/>
          </ul>
        </div>
    );
  }
}