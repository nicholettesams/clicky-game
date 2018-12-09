import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import friends from "./friends.json";

function randomizeFriends(array){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
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
    // Increase the current score by 1 
    this.setState({
      currentScore: this.state.currentScore + 1
    })
    console.log(this.state.currentScore)

    // If current score is greater than top score, set the top score to the current score
    if (this.state.currentScore > this.state.topScore) {
      this.setState({topScore: this.state.currentScore})
    }
    console.log(this.state.topScore)

  }

  handleFriends = () => {
    // load friends in a different order every time the user clicks a friend.
    let randomFriends = randomizeFriends(friends)
    this.setState({ friends: randomFriends})
  }

  handleClick = id => {
    // TODO:
    // If result is good (new click)
        // set state as clicked
        // ??
        // show result
        this.setState({ result: "You guessed correctly!" });
        // increase the score
        this.handleScore()
        // reload the cards in a different order 
        this.handleFriends() 
    // IF result is bad (re-click)
        // show result
        //this.setState({ result: "You guessed incorrectly!" });
        // clear scores and restart the game 
        // this.setState({
        //   currentScore: 0,
        //   result: ""
        // })
        // this.handleFriends()
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
            handleClick={this.handleClick}
            handleFriends={this.handleFriends}
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
