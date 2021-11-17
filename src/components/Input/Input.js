import React from 'react'

import './Input.css'

function Input(props) {
    return (
        <div className="input-wrapper">
            <div className="input">
                <span>{props.heading}</span>
                <input className={props.showError ? 'error' : null} type={props.type} value={props.val} onChange={props.changed}/>
            </div>
            { props.showError
                ? <div className="input__error">{props.errMsg}</div>
                : null}
        </div>
    )
}

export default Input
