import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import UserDetails from './details/user';
import HearthstoneDetails from './details/hearthstone';
import SocialMediaDetails from './details/social-media';
import DangerZone from './details/danger-zone';
import {updateEmail, updateHearthstoneData, updateSocialMediaData} from '../../../../firebase/user/update';
import {deleteUser} from '../../../../firebase/user/delete';
import {FIREBASE_REAUTHENTICATE_REQUEST} from "../../../../redux/firebase/types";
import Icon from "../../../../components/icon";

class Sidebar extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      editing_account: false,
      editing_hearthstone: false,
      editing_social_media: false,
      editing_delete_account: false,
      email: '',
      avatar: '',
      new_password: '',
      confirm_new_password: '',
      battletag: '',
      favouriteClass: '',
      region: '',
      facebook: '',
      twitter: '',
      twitch: '',
      youtube: '',

      isReauthenticated: false,
      reauthPassword: ''
    };
  }

  handleEditClick(e){
    //either "Edit" or "Cancel" buttons
    let target = e.target.id;
    let isActive = !this.state[target];
    this.setState({
      [target]: isActive
    });
  }

  validateState(user, value){
    return  this.state[value] !== null ? this.state[value] : user[value];
  }

  handleSaveClick = (e) => {
    /*
     * Changes will occur after relogging, need to reauthenticate or some other stuff
     */
    const {activeUser} = this.props;
    const {uid} = activeUser;
    let target = e.target.id;
    let isActive = !this.state[target];
    this.setState({
      [`editing_${target}`]: isActive
    });

    const validateInput = (value) => {
      return this.state[value] !== null ? this.state[value] : activeUser[value];
    };

    switch(target){
      case 'details': return updateEmail(this.state.email);
      case 'hearthstone': return updateHearthstoneData(uid, validateInput('battletag'), validateInput('favouriteClass'), validateInput('region'));
      case 'social_media': return updateSocialMediaData(uid, validateInput('facebook'), validateInput('twitter'), validateInput('twitch'), validateInput('youtube'));
      default: return target;
    }
  };

  handleInputChange(e){
    let target = e.target.id;
    let value = e.target.value;
    this.setState({
      [target]: value
    })
  }


  handleSelectChange(v, selector){
    this.setState({
      [selector]: v
    })
  }

  handleDeleteAccountClick = () =>{
    deleteUser(this.props.activeUser);
  };

  handleReauthenticationClick = () =>{
    const {reauthenticate} = this.props;
    reauthenticate(this.props.activeUser.email, this.state.reauthPassword);
  };

  render() {
    const {activeUser} = this.props;
    return (
        <div className="container__page--inner container__page--left">
          <h3 className="sidebar__header">Profile</h3>

          <div className="sidebar__body">
          <div className="about">
            <div className="avatar">{activeUser.avatar ? <img src={activeUser.avatar} alt={`${activeUser.username}'s profile`}/> : <Icon name="login"/>}</div>
            <div className="username">{activeUser.username}</div>
            <div className="rank">{activeUser.rank}</div>
          </div>

            <ul>
              <UserDetails user={activeUser}
                           newPassword={this.state.new_password}
                           isEditing={this.state.editing_account}
                           handleEditClick={(e)=>this.handleEditClick(e)}
                           handleInputChange={(e)=>this.handleInputChange(e)}
                           handleSaveClick={this.handleSaveClick}/>
              <HearthstoneDetails user={activeUser}
                                  isEditing={this.state.editing_hearthstone}
                                  handleEditClick={(e)=>this.handleEditClick(e)}
                                  handleInputChange={(e)=>this.handleInputChange(e)}
                                  handleSelectChange={(v, selector)=>this.handleSelectChange(v, selector)}
                                  handleSaveClick={this.handleSaveClick}/>
              <SocialMediaDetails user={activeUser}
                                  isEditing={this.state.editing_social_media}
                                  handleEditClick={(e)=>this.handleEditClick(e)}
                                  handleInputChange={(e)=>this.handleInputChange(e)}
                                  handleSaveClick={this.handleSaveClick}/>
              <DangerZone isEditing={this.state.editing_delete_account}
                          reauthPassword={this.state.reauthPassword}
                          handleDeleteAccountClick={this.handleDeleteAccountClick}
                          handleReauthenticationClick={this.handleReauthenticationClick}
                          handleEditClick={(e)=>this.handleEditClick(e)}
                          handleInputChange={(e)=>this.handleInputChange(e)}
                          handleSaveClick={this.handleSaveClick}/>
            </ul>
          </div>
        </div>
    );
  }
}


const mapStateToProps = (state) =>{
  const {activeUser} = state.users;
  return {activeUser};
};

const mapDispatchToProps = (dispatch) => {
  return {
    reauthenticate: (email, password) => dispatch({
      type: FIREBASE_REAUTHENTICATE_REQUEST, payload: {email, password}
    }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);