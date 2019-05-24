import React from "react";
import kiran from "../../assets/kiran.jpg";

const KiranModal = (props) => {
    return (
        <div className="modal-container">
            <button aria-label="close modal" className="modal-button" type="button" onClick={props.closeInternModal}>
                <i aria-hidden="true" className="far fa-times-circle close"></i>
            </button>

            <h1>Kiran</h1>
            <img className="photo" src={kiran} alt="a black and white headshot of Kiran"/>
            <h2>The Mad Scientist a.k.a. Finance</h2>
            <p>She’s got the microbes that’ll send you running to the washroom.
            Don’t worry, she’ll make sure you get reimbursed for the heist.</p>
            <p><span className="bold">Strength:</span> Can make you shit your pants</p>
            <p><span className="bold">Weakness:</span> Overate bagels</p>
        </div>
    )
}

export default KiranModal;