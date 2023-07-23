// src/components/Player.js
import React from "react";
import {Card} from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
      <Card style={{ width: "18rem", margin: "10px", background:"#0048BA", borderRadius: "20px", overflow: "hidden", boxShadow: "5px 7px 8px black" }}>
        <Card.Img variant="top" style={{height:'300px'}} src={imageUrl} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Team: {team}<br/> 
            Nationality: {nationality}<br/>
            Jersey Number: {jerseyNumber}<br/> 
            Age: {age}
          </Card.Text>  
        </Card.Body>
      </Card>  
    );
  };

export default Player;