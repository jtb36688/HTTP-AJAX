import React from "react";

const FriendsList = props => {
  const renderAge = () => {
    let tagsarray = [];
    for (let i = 1; i < 130; i++) {
      tagsarray.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return tagsarray;
  };
  return (
    <ul>
      {props.friendsarray.map(({ id, name, age, email }) => {
        if (props.currentlyupdating === id) {
          return (
            <li key={id}>
              <form onSubmit={(e) => props.updateFriend(e, id)}>
                <input
                  value={props.newfriend.name}
                  type="text"
                  name="name"
                  placeholder="Friend Name.."
                  onChange={props.handleChanges}
                />
                <select
                  name="age"
                  value={props.newfriend.age}
                  onChange={props.handleChanges}
                >
                  <option value="">Friend Age..</option>
                  {renderAge()}
                </select>
                <input
                  value={props.newfriend.email}
                  type="text"
                  name="email"
                  placeholder="Friend Email.."
                  onChange={props.handleChanges}
                />
                <button type="submit">Update Friend</button>
                <button onClick={() => props.cancelUpdate(id)}>
                  Cancel Updating
                </button>
              </form>
            </li>
          );
        } else {
          return (
            <li key={id}>
              <ul className="InnerLists">
                <li> Name: {name} </li>
                <li> Age: {age} </li>
                <li> Email: {email} </li>
              </ul>{" "}
              <button onClick={() => props.deleteFriend(id)}>
                Delete Friend
              </button>
              <button onClick={() => props.toggleUpdate(id)}>
                Update Friend
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default FriendsList;
