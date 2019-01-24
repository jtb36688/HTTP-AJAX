import React from "react";


const FriendsForm = props => {
  const renderAge = () => {
    let tagsarray = [];
    for (let i = 1; i < 130; i++) {
      tagsarray.push(<option key={i} value={i}>{i}</option>);
    }
    return tagsarray;
  };

  return (
    <form onSubmit={props.addNewFriend}>
      <input
      value={props.newname}
      type='text'
      name='newname'
      placeholder='Friend Name..'
      onChange={props.handleName}
      />
      <select name="newage" value={props.newage} onChange={props.handleAge}>
        <option value="">Friend Age..</option>
        {renderAge()}
      </select>
      <input
      value={props.newemail}
      type='text'
      name='newemail'
      placeholder='Friend Email..'
      onChange={props.handleEmail}
      />
      <button type="submit">Add New Friend</button>
      
    </form>
  );
};

export default FriendsForm;