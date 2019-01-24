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
    newemail: "",
    datalength: ''
  };



  clearData = () => {
    axios
    .get("http://localhost:5000/friends")
    .then(res => {
      this.setState({ datalength: (res.data.length) });
    })
    .catch(err => {
      console.log(err);
    });
    this.deleteitem();
  }
  
  deleteitem = () => {
    axios.delete(`http://localhost:5000/friends/${this.state.datalength}`)
    .then(res => {
      this.setState({ friends: res.data });
    })
    .catch(err => console.log(err))
    this.setState({ datalength: ''})
  }

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

  // componentDidUpdate() {
  //   axios
  //     .post("http://localhost:5000/friends", {
  //       name: this.state.newname,
  //       age: this.state.newage,
  //       email: this.state.newemail
  //     })
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         newname: "",
  //         newage: "",
  //         newemail: ""
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

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
      ]
    });
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.newname,
        age: this.state.newage,
        email: this.state.newemail
      })
      .then(res => {
        console.log(res);
        this.setState({
          newname: "",
          newage: "",
          newemail: ""
        });
      })
      .catch(err => {
        console.log(err);
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
        <button onClick={this.clearData}>Clear First Friend</button>
      </div>
    );
  }
}

export default App;
