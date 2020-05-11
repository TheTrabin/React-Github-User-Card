import React from "react";
import styled from "styled-components";

const Container = styled.div `
display: flex;
flex-direction: row-wrap;
margin: 0 auto;
background: black;
border: solid 2px gold;
margin-bottom: 2%;
`;

// const FollowCard = styled.div `
// display: flex;
// flex-direction: row-wrap;
// margin: 0 auto;
// `;


const Card = ({user}) => {
    console.log("mm: Card.js: information to pass", user)

  return (
      
    <Container>
        <div>
        <img src={user.avatar_url} alt="avatar"/>
        </div>
        <div>
        <h3>{user.name}</h3>
        <p>User Name: {user.login}</p>
        <p>Location: {user.location}</p>
        <p></p>
        <p>{user.html_url}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Bio: {user.bio}</p>
        </div>
    </Container>
 
  
  );
  };

  export default Card;
  