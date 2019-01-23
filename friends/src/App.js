import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";

class App extends Component {
  state = {
    friends: [],
    newname: "",
    newage: "",
    newemail: ""
  };

componentDidMount() {
  axios
  .get('http://localhost:5000/friends')
  .then(res => {
    this.setState({friends: res.data})
   })
  .catch(err => {
    console.log(err)
  });
}




  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewFriend = e => {
    e.preventDefault();
    this.setState({
      friends: [
        ...this.state.friends,
        {
          name: this.state.newname,
          age: this.state.newage,
          email: this.state.newemail
        }
      ],
      newname: "",
      newage: "",
      newemail: ""
    });
  };

  render() {
    return (
      <div className="AppContainer">
        <FriendsList friendsarray={this.state.friends} />
        <FriendsForm
          newname={this.state.newname}
          newage={this.state.newage}
          newemail={this.state.newemail}
          handleName={this.handleChanges}
          handleAge={this.handleChanges}
          handleEmail={this.handleChanges}
          addNewFriend={this.addNewFriend}
        />
      </div>
    );
  }
}

export default App;
