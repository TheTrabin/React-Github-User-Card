import React from "react";
import "./App.css";
import Card from "./components/Card";


// export default function App() {
class App extends React.Component {
  state = {
    user: [{}],
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
      
  }

  handleUserChange = e => {
    this.setState({
      login: e.target.value
    });
  };

  handleUserUpdate = e => {
    fetch(`https://api.github.com/users/${this.login}`)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(user => {
        if (user.status === "error") {
          this.setState({ error: user });
        } else {
          this.setState({ user: user });
        }
      })
      .catch(err => {
        console.error("mm: App.js Failure ", err);
        this.setState({ error: err });
      });
  };

  render() {
    // console.log("mm: User to pass App.js:", this.state.user)
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <Card  user={this.state.user} />
        {/* <div>
        <p> Test </p>
        <div>
        <img src={this.state.user.avatar_url} alt="avatar" />
        </div>
        <h3>{this.state.user.name}</h3>
        <p>User Name: {this.state.user.login}</p>
        <p>Location: {this.state.user.location}</p>
        <p></p>
        <a href="${this.state.user.html_url}">{this.state.user.html_url}</a>
        <p>Followers: {this.state.user.followers}</p>
        <p>Following: {this.state.user.following}</p>
        <p>Bio: {this.state.user.bio}</p>
    </div> */}
        <input
          type="text"
          placeholder="user name"
          value={this.state.user.login}
          onChange={this.handleUserChange}
        />
        <button onClick={this.handleUserUpdate}>Search User</button>
        {this.state.error ? (
          <p>there was an error: {this.state.error}</p>
        ) : (
          this.state.user.map(user => {
            return <img src={this.state.user.avatar_url} alt="user" />;
          })
        )}
      </div>
    );
  }
}

export default App;
