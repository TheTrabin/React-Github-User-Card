import React from "react";
import styled from "styled-components";

const Card = ({user}) => {
    console.log("mm: Card.js: information to pass", user)

  return (
      
    <div>
        <p> Test </p>
        <div>
        <img src={user.avatar_url} alt="avatar"/>
        </div>
        <h3>{user.name}</h3>
        <p>User Name: {user.login}</p>
        <p>Location: {user.location}</p>
        <p></p>
        <a href="${user.html_url}">{user.html_url}</a>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Bio: {user.bio}</p>
    </div>
 
  
  );
  };

  export default Card;
  