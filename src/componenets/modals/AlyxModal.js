import React from "react";
import alyx from "../../assets/alyx.jpg";
const AlyxModal = (props) => {
    return (
        <div className="modal-container">
            <button aria-label="close modal" className="modal-button" type="button" onClick={props.closeInternModal}>
                <i aria-hidden="true" className="far fa-times-circle close"></i>
            </button>

            <h1>Alyx</h1>
            <img className="photo" src={alyx} alt="a black and white headshot of Alyx"/>
            <h2>The Mastermind a.k.a. Strategy</h2>
            <p>She wants to make memories as a team,and even her backup plans have backup plans.</p>
            <p><span className="bold">Strength:</span>Photographic memory (but only of dogs)</p>
            <p><span className="bold">Weakness:</span> Allergic to the sun</p>
        </div>
    )
}

export default AlyxModal;