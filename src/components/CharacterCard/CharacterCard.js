import React from 'react';
import './CharacterCard.scss';

const CharacterCard = ({characterArray}) => {
    return(
        <div className='characterContainer'>
            {characterArray.map((item,i)=> {
                return(
                    <div key={i} className='characterChild'>
                        <img src={`${item.thumbnail.path}/landscape_incredible.${item.thumbnail.extension}`} alt={`${item.name}`}/>
                        <div>{item.name}</div>
                        {item.description&&<div>{item.description}</div>}
                    </div>
                )
            })}
        </div>
    );
}

export default CharacterCard;