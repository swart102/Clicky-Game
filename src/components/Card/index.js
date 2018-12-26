import React from 'react';
import './style.css'

const Card = function (props) {
        return (
            <div className='card' onClick={() => props.shuffle(props.id)}>
                <div className="img-container">
                    <img alt={props.id} src={props.image} />
                </div>
            </div>
        );
}

export default Card;