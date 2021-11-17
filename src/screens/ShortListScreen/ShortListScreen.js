import React from 'react'
import { connect } from 'react-redux'

import CandidateList from '../../components/CandidateList/CandidateList'

function ShortListScreen(props) {
    return (
        <div className="shortListScreen">
            <CandidateList candidateData={props.shortListArr}
                message="No shortlisted candidate found!"/>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        shortListArr: state.shortList
    }
}

export default connect(mapStatetoProps, null)(ShortListScreen)
