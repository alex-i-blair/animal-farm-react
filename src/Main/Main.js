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
            type={animal.type}
            name={animal.name}
            says={animal.says}
            key={animal.type + i}
          />
        );
      })}
    </main>
  );
}
