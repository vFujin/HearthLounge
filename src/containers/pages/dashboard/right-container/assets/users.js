import React from 'react';
import Loader from "../../../../../components/loaders/loader";
import DeckSnippet from "../../../../../components/deck-snippet/deck-snippet";

const Users = ({allUsers}) =>{
  const {loading, users} = allUsers;

  const userss = () => users.map(user =>(
      <tr key={user.uid}>
        <td><input defaultValue={user.username} /></td>
        <td><input defaultValue={user.email}/></td>
        <td><input defaultValue={user.role}/></td>
        <td>
          <button>Edit</button>
          <button>Save</button>
          <button>Cancel</button>
        </td>
      </tr>
    )
  );

  const usersTable = () =>(
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
      {userss()}
      </tbody>
    </table>
  );

  return (
    <div className="decks">
      {
        loading
          ? <Loader/>
          : (users && users.length > 0) ? <div>Users: {usersTable()}</div> : <p></p>
      }
    </div>
  )
};

export default Users;