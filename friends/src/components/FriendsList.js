import React from "react";

export default (FriendsList = props => {
  return (
    <ul>
      {props.friendsarray.map(({ name, age, email }) => (
        <li>
          <ul>
            <li> Name: {name} </li>
            <li> Age: {age} </li>
            <li> Email: {email} </li>
          </ul>{" "}
        </li>
      ))}
    </ul>
  );
});
