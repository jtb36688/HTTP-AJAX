import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";

const blankfield = {
  name: "",
  age: "",
  email: ""
};

class App extends Component {
  state = {
    friends: [],
    newfriend: blankfield,
    newname: "",
    newage: "",
    newemail: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChanges = e => {
    e.persist();
    this.setState(currentState => {
      return {
        newfriend: {
          ...currentState.newfriend,
          [e.target.name]: e.target.value
        }
      };
    });
  };

  addNewFriend = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newfriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
  };

  deletefriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}/`)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  updateFriend = () =>
    axios
      .put(`http://localhost:5000/friends/${id}`, this.state.newfriend)
      .then(res => {
        this.setState({
          friends: res.data,
          friend: clearedItem
        });
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });

  render() {
    return (
      <div className="AppContainer">
        <FriendsList
          friendsarray={this.state.friends}
          deleteFriend={this.deleteFriend}
        />
        <Route
          path="/newfriend/"
          render={props => (
            <FriendsForm
              {...props}
              newfriend={this.state.newfriend}
              handleChanges={this.handleChanges}
              addNewFriend={this.addNewFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
