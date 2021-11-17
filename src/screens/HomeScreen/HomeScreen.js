import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import axios from 'axios'
import CandidateCard from '../../components/CandidateCard/CandidateCard'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'

import CandidateList from '../../components/CandidateList/CandidateList'

function HomeScreen(props) {
    const [candidateData, setCandidateData] = useState([])
    const [modal, setModal] = useState(false)
    const [currentCandidate, setCurrentCandidate] = useState({})

    useEffect(() => {
        fetchCandidateData()
    }, [])

    const fetchCandidateData = async () => {
        try {
            const data = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
            
            setCandidateData(data.data)
        } catch(error) {
            console.log(error)
        }
    }

    const showCandidateData = (candidateObj) => {
        console.log(candidateObj)
        setCurrentCandidate(candidateObj)
        setModal(true)
    }

    const shortlistCandidate = () => {
        setModal(false)
        props.addShortlist(currentCandidate)
    }

    const rejectCandidate = () => {
        setModal(false)
        props.addReject(currentCandidate)
    }

    return (
        <div className="homeScreen">
            <CandidateList candidateData={candidateData}
                showCandidateData={showCandidateData}
                animation="false"/>
            <Modal show={modal} modalClosed={() => setModal(false)}>
                <CandidateCard
                    image={currentCandidate.Image} 
                    name={currentCandidate.name}/>
                <Button text="Shortlist" animation="true" clicked={shortlistCandidate}/>
                <Button text="Reject" clicked={rejectCandidate}/>
            </Modal>
        </div>
    )
}

const mapDispatchtoProps = dispatch => {
    return {
        addShortlist: (canData) => dispatch({type: 'ADD_SHORTLIST_CANDIDATE', data: canData}),
        addReject: (canData) => dispatch({type: 'ADD_REJECT_CANDIDATE', data: canData})
    }
}

export default connect(null, mapDispatchtoProps)(HomeScreen)
