import React from "react";
import "./App.css";
import Card from "./components/Card";
import Follow from "./components/Follow";
import styled from "styled-components";
import GitHubCalendar from 'react-github-calendar';

const Boxy = styled.div `
display: flex;
flex-direction: column;
`;

// const List = styled.div `
// display: flex;
// flex-direction: row-wrap;
// `;

class App extends React.Component {
  state = {
    user: [{}],
    followers: [],
    error: "",
    userName: "login"
    
  };

  componentDidMount() {
    fetch("https://api.github.com/users/TheTrabin")
      
      .then(res => res.json(),
      )
      .then(user => {
        console.log(
          "mm: App.js: CDM: Fetch: Return statement of collection",
          user

        );
        if (user.status === "error") {
          this.setState({ error: user });
        } else {
          this.setState({ user: user }, () => {console.log(this.state.user, "user info")});
          console.log("mm: App.js: CDM: user info", user)
          // console.log("mm: App.js State Set: ", github)
        }
      })
      .catch(err => {
        console.error("mm: App.js Failure ", err);
        this.setState({ error: err });
      });

      fetch(`https://api.github.com/users/${this.state.user.login}/followers`)
      .then(res => res.json(),)
      .then(follow => {
        console.log(
          "mm: App.js: CDM: Fetch: Return statement of collection followers",
          follow

        );
        if (follow.status === "error") {
          this.setState({ error: follow });
        } else {
          this.setState({ followers: follow }, () => {console.log(this.state.followers, "follow info")});
          console.log("mm: App.js: CDM: follower info", follow)
          // console.log("mm: App.js State Set: ", github)
        }
      })
      .catch(err => {
        console.error("mm: App.js Failure ", err);
        this.setState({ error: err });
      });
  }
  //Attempted to set up user search pattern.
  // handleUserChange = e => {
  //   this.setState({
  //     login: e.target.value
  //   });
  // };

  // handleUserUpdate = e => {
  //   fetch(`https://api.github.com/users/${this.login}`)
  //     .then(res => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then(user => {
  //       if (user.status === "error") {
  //         this.setState({ error: user });
  //       } else {
  //         this.setState({ user: user });
  //       }
  //     })
  //     .catch(err => {
  //       console.error("mm: App.js Failure ", err);
  //       this.setState({ error: err });
  //     });
  // };
  

  render() {
    // console.log("mm: User to pass App.js:", this.state.user)
    return (
      <div className="App">
        <h1>Github User Card</h1>
        
        {/* <input
          type="text"
          placeholder="user name"
          onChange={this.handleUserChange}
        />
        <button onClick={this.handleUserUpdate}>Search User</button> */}
        <Boxy>
        <GitHubCalendar username="TheTrabin" color="blue" />
        <Card  user={this.state.user} />
        
        <h1>Followers</h1>
        <Follow followers={this.state.followers} user={this.state.user} />
        </Boxy>
      </div>
    );
  }
}

export default App;
