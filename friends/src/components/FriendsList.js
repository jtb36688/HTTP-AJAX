import React from "react";

const FriendsList = props => {
  return (
    <ul>
      {props.friendsarray.map(({ name, age, email }) => (
        <li key={email}>
          <ul className="InnerList">
            <li> Name: {name} </li>
            <li> Age: {age} </li>
            <li> Email: {email} </li>
          </ul>{" "}
        </li>
      ))}
    </ul>
  );
};

export default FriendsList
