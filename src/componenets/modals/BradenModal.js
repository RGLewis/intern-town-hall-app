import React from "react";
import braeden from '../../assets/braeden.jpg'

const BradenModal = (props) => {
    return (
        <div className="modal-container">
            <button aria-label="close modal" className="modal-button" type="button" onClick={props.closeInternModal}>
                <i aria-hidden="true" className="far fa-times-circle close"></i>
            </button>

            <h1>Braeden</h1>
            <img className="photo" src={braeden} alt="a black and white headshot of Braedon"/>
            <h2>The Acrobat a.k.a. Dev</h2>
            <p>He’s HUNGRY and he’ll backflip past lasers to get that bread.</p>
            <p><span className="bold">Strength:</span> Insanely flexible (swallows bagels whole)</p>
            <p><span className="bold">Weakness:</span>Not flexible enough when eats too many bagels</p>
        </div>
    )
}

export default BradenModal;