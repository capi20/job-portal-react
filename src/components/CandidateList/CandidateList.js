import React from 'react'

import './CandidateList.css'
import CandidateCard from '../CandidateCard/CandidateCard'
import Aux from '../../hoc/Auxi'

function CandidateList(props) {
    return (
        <div className="candidate__list">
            { props.candidateData.length > 0 
            ? <Aux>
                {props.candidateData.map((el, i) => {
                    return <CandidateCard key={i} 
                        image={el.Image} 
                        name={el.name} 
                        animation={props.animation}
                        clicked={props.showCandidateData ? () => props.showCandidateData(el) : null}/>
                })} 
            </Aux>
            : <p className="message">{props.message}</p>}
        </div>
    )
}

export default CandidateList
