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

  handleScore = id => {
    // TODO: Increase the score by 1 
    // If current score is greater than top score, set the top score to the current score

  }

  handleClick = id => {
    // TODO: When click, need to show result (new click or re-click), 
    
    // If result is good (new click)
        // increase the score, and reload the cards in a different order   
    // IF result is bad (re-click)
        // clear scores and restart the game 

    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // this.setState({ friends });
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


        {/* TODO: figure out how to get into 3 rows and 4 columns */}
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
