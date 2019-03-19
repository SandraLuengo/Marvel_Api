import React from 'react';
import './CharacterCard.scss';

const CharacterCard = ({characterArray}) => {
    return(
        <div className='characterContainer'>
            {characterArray.map((currentCharacter,index)=> {
                return(
                    <div key={index} className='characterChild'>
                        <img src={`${currentCharacter.thumbnail.path}/landscape_incredible.${currentCharacter.thumbnail.extension}`} alt={`${currentCharacter.name}`}/>
                        <h1>{currentCharacter.name}</h1>
                        {currentCharacter.description&&<div>{currentCharacter.description}</div>}
                    </div>
                )
            })}
        </div>
    );
}

export default CharacterCard;