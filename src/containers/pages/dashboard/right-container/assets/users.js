import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Loader from "../../../../../components/loaders/diamond/loader";
import {deleteUserRequest} from "../../../../../redux/admin/remove-user/actions";
import {updateUserRequest} from "../../../../../redux/admin/update-user/actions";

class Users extends Component {

  constructor(){
    super();

    this.state = {};
  }

  handleInputChange = (e, field) =>{
    const uid = e.currentTarget.dataset.uid;
    const value = e.currentTarget.value;
    this.setState({
      [uid]: {
        ...this.state[uid],
        [field]: field === "role" ? +value : value,
        updatedProfile: !(this.state[uid] && (this.state[uid].usernames.includes("@") || _.isEmpty(this.state[uid].usernames))) ? false : true
      }
    });
  };

  handleUserDeletion = (e) =>{
    const uid = e.currentTarget.value;
    this.props.deleteUser(uid);
  };

  handleUserUpdate = (e) => {
    const uid = e.currentTarget.value;
    if(this.state[uid]) {
      this.props.updateUser(Object.assign({}, {uid, [uid]: this.state[uid]}));
      this.setState({[uid]: null});
    }
  };

  cancelChanges = (e) =>{
    const uid = e.currentTarget.value;
    this.setState({[uid]: null})
  };

 userss = () => this.props.allUsers.users.map(user => {
      const {uid} = user;
      const stateUidIsNull = this.state[uid] && this.state[uid] === null;
      const stateUidNotNull = this.state[uid] && this.state[uid] !== null;
      return (
        <tr key={uid}>
          <td><input data-uid={uid} value={this.state[uid] ? this.state[uid].username : user.username} onChange={(e) => this.handleInputChange(e, "usernames")}/></td>
          <td><input data-uid={uid} value={this.state[uid] ? this.state[uid].email : user.email} onChange={(e) => this.handleInputChange(e, "email")}/></td>
          <td><input data-uid={uid} type="number" value={this.state[uid] ? this.state[uid].role : user.role} onChange={(e) => this.handleInputChange(e, "role")}/></td>
          <td>
            <button className={`btn btn__${(stateUidIsNull || !this.state[uid]) ? "default" : "update"}`} value={uid} onClick={this.handleUserUpdate}>Update</button>
            <button className="btn btn__delete" value={uid} onClick={this.handleUserDeletion}>Remove</button>
            <button className={`btn btn__${stateUidNotNull ? "default--active" : "default"}`} value={uid} onClick={this.cancelChanges}>Cancel</button>
          </td>
        </tr>
      )
    }
  );

  usersTable = () =>(
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Settings</th>
        </tr>
      </thead>
      <tbody>
      {this.userss()}
      </tbody>
    </table>
  );

  render() {
    const {loading, users} = this.props.allUsers;
    return (
      <div className="decks">
        {
          loading
            ? <Loader/>
            : (users && users.length > 0) ? <div>Users: {this.usersTable()}</div> : <p></p>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    deleteUser: payload => dispatch(deleteUserRequest(payload)),
    updateUser: payload => dispatch(updateUserRequest(payload)),
  }
};

export default connect(null, mapDispatchToProps)(Users);
