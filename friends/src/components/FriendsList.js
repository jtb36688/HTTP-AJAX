import React from "react";

class FriendsList extends React.Component  props => {
  return (
    <ul>
      {props.friendsarray.map(({ id, name, age, email } index) => (
        <li key={id}>
          <ul className="InnerList">
            <li> Name: {name} </li>
            <li> Age: {age} </li>
            <li> Email: {email} </li>
          </ul>{" "}
          <button onClick={(e) => props.deleteFriend(e, id)}>Delete Friend</button>
          <button onClick={props.toggleUpdateForm(id)}>Update Friend</button>
        </li>
      ))}
    </ul>
  );
};

export default FriendsList
