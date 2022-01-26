import React from 'react';
import AnimalCard from '../AnimalList/AnimalList';
import background from '../background.png';
import './Main.css';

export default function Main(props) {
  return (
    <main style = {{ backgroundImage: `url(${background})` }}>
      {props.animals.map((animal, i) => {
        return (
          <AnimalCard 
            name={animal.name}
            
        )
      })}
    </main>
  );
}
