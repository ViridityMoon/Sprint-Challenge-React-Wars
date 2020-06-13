//  Import dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from './Container'

// Create Character component
const Character = (props) => {
    // Initiate state
    const [info, setInfo] = useState([])
    // Fetch data on render
    useEffect(() => {
        axios
          .get(props.card.url)
          .then(response => {
            console.log('name the log', response);
            setInfo(response.data);
          })
          .catch(error => {
            console.log('name the log', error)
          })
    }, []);

    // Return Character card, displaying Name, Height, and Weight
    return (
        <Container>
            <div className = 'character-card'>
                {/* Displaying the Name; Capitalizing the first letter, and slicing the rest back on  */}
                <h2>{props.card.name[0].toUpperCase() + props.card.name.slice(1)}</h2>
                <p className = 'height-weight'>{`Height: ${info.height}cm - Weight: ${info.weight}lbs`}</p>
            </div>
        </Container>
    );
}
  
export default Character;
