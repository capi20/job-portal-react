import React from 'react'

import './Modal.css'
import BackDrop from '../Backdrop/Backdrop'
import Aux from '../../hoc/Auxi'

function Modal(props) {
    return (
        <Aux>
            <BackDrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className='modal'
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <span className="closeBtn" onClick={props.modalClosed}>
                    <i className="ion-android-cancel"></i>
                </span>
                {props.children}
            </div>
        </Aux>
    )
}

export default Modal
