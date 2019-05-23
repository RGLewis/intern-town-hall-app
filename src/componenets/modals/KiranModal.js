import React from "react";
import kiran from "../../assets/kiran.jpg";

const KiranModal = (props) => {
    return (
        <div className="modal-container">
            <button className="modal-button" type="button" onClick={props.closeInternModal}>
                <i class="far fa-times-circle close"></i>
            </button>

            <h1>Kiran</h1>
            <img className="photo" src={kiran} alt="A photo of kiran"/>
            <h2>The Mad Scientist a.k.a. Finance</h2>
            <p>She’s got the microbes that’ll send you running to the washroom.
            Don’t worry, she’ll make sure you get reimbursed for the heist.</p>
            <p><span className="bold">Strength:</span> Can make you shit your pants</p>
            <p><span className="bold">Weakness:</span> Overate bagels</p>
        </div>
    )
}

export default KiranModal;