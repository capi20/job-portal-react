import React from 'react'
import { connect } from 'react-redux'

import CandidateList from '../../components/CandidateList/CandidateList'

function RejectScreen(props) {
    return (
        <div className="shortListScreen">
            <CandidateList candidateData={props.rejectArr}
                message="No rejected candidate found!"/>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        rejectArr: state.rejectList
    }
}

export default connect(mapStatetoProps, null)(RejectScreen)
