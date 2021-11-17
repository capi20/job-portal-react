import React from 'react'

import './CandidateCard.css'

function CandidateCard(props) {
    let cardClasses = ['candidate__card']
    cardClasses = props.animation ? cardClasses.concat('animate') : cardClasses
    console.log(cardClasses)
    return (
        <div className={cardClasses.join(' ')} onClick={props.clicked}>
            <img className="candidate__img" src={props.image}/>
            <p className="candidate__name">{props.name}</p>
        </div>
    )
}

export default CandidateCard
