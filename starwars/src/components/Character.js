import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
  } from 'reactstrap';


import styled from 'styled-components';

const StyledCont = styled.div`
display: flex; 
flex-direction: column;
justify-content: space-between;
background-color:blue;`;

const StyledContContainer = styled.div`

margin: 10%;
border: 2px solid black;`;

const Character = props => {
    return (
    // <div>
    //   <h2>Name: {props.name}</h2>
    //   <p>Height: {props.height}</p>
    //   <p>Mass: {props.mass}</p>
    //   <p>Hair color: {props.hairColor}</p>
    // </div>

    //  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
    //    <CardTitle>{props.name}</CardTitle>
    //     <CardSubtitle>{props.height}</CardSubtitle>
    //     <CardText>{props.weight}</CardText>
    
        
    //  </Card> 
    <Col key = {props.key}>
    
     <StyledContContainer>

       <StyledCont>
            <CardTitle>Name: {props.name}</CardTitle>
            <CardSubtitle className = "text-warning">Height: {props.height} Inches</CardSubtitle>
            <CardText>Mass: {props.mass} Grams</CardText>
            <CardText>Hair Color: {props.hairColor}</CardText>
        </StyledCont> 
       
     </StyledContContainer> 
    </Col>
    )
  };
  
  export default Character;