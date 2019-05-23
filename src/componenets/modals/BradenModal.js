import React from "react";
import braeden from '../../assets/braeden.jpg'

const BradenModal = (props) => {
    return (
        <div className="modal-container">
            <button className="modal-button" type="button" onClick={props.closeInternModal}>
                <i class="far fa-times-circle close"></i>
            </button>

            <h1>Braeden</h1>
            <img className="photo" src={braeden} alt="its braeden"/>
            <h2>The Acrobat a.k.a. Dev</h2>
            <p>He’s HUNGRY and he’ll backflip past lasers to get that bread.</p>
            <p><span className="bold">Strength:</span> Insanely flexible (swallows bagels whole)</p>
            <p><span className="bold">Weakness:</span>Not flexible enough when eats too many bagels</p>
        </div>
    )
}

export default BradenModal;