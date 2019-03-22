import React from 'react';
import './StarWars.css';

function Character(props) {
  console.log(props.characterProp);
  return (
    <div className="Character-info">
      <h3>{props.characterProp.name}</h3>
      <div className='facts'>
        <li>
          <strong>Date of Birth:</strong> {props.characterProp.birth_year}
        </li>
        <li>
          <strong>Gender:</strong> {props.characterProp.gender}
        </li>
        <li>
          <strong>Height:</strong> {props.characterProp.height}
        </li>
        <li>
          <strong>Mass:</strong> {props.characterProp.mass}
        </li>
        <li>
          <strong>Eye Color:</strong> {props.characterProp.eye_color}
        </li>
        <li>
          <strong>Hair Color:</strong> {props.characterProp.hair_color}
        </li>
        <li>
          <strong>Skin Color:</strong> {props.characterProp.skin_color}
        </li>
      </div>

    </div>

  );
}

export default Character;