import React from 'react';
import data from './data'

import './App.css'

class Card extends React.Component {
    render() {
        return (
            <div className='container'>
                {data.map(({ name, type, averageWeight, image, moreInfo }) => (
                    <div className="card">
                        <div className="text">
                            <p>{name}</p>
                            <p>{type}</p>
                            <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
                            <a href={moreInfo} target="_blank" rel="noreferrer">More Info</a>
                        </div>
                        <img src={image} alt={name}></img>
                    </div>
                ))}
            </div>
        )
    }
}

export default Card