import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import friends from "./friends.json";

function loadFriends(){
  // TODO: figure out how to load friends in a different order every time the user clicks a friend.

}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    result: "",
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar 
        title="Game of Thrones Clicky Game"
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        result={this.state.result}>
        </NavBar>
        <Title>Click on an image to earn points, but don't click on any more than once!</Title>

        {this.state.friends.map(friend => (
          <FriendCard
            loadFriends={this.loadFriends}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
