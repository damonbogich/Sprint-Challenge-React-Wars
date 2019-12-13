import React from "react";
import styled from "styled-components";

const StyledOutterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;`

const StyledContainer = styled.div`
border: 2px dashed black;
width: 33%;
margin: 5%;`;

const NameStyle = styled.h1`
font-size: 4rem;
color: red;`;

const HeightStyle = styled.p`
font-size: 2rem;
color: blue;`;

const MassStyle = styled.p`
font-size: 2rem;
color: green`;

const HairStyle = styled.p`
font-size: 2rem;
color: purple;`;

const Character = props => {
    return ( 
    <StyledOutterContainer>   
        <StyledContainer>
            <NameStyle>Name: {props.name}</NameStyle>
            <HeightStyle>Height: {props.height}</HeightStyle>
            <MassStyle>Mass: {props.mass}</MassStyle>
            <HairStyle>Hair color: {props.hairColor}</HairStyle>
        </StyledContainer>
    </StyledOutterContainer> 
    )
  };
  
  export default Character;