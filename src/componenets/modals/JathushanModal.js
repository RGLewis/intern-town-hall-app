import React from "react";
import jathu from "../../assets/jathu.jpg";

const JathushanModal = (props) => {
    return (
        <div className="modal-container">
            <button className="modal-button" type="button" onClick={props.closeInternModal}>
                <i class="far fa-times-circle close"></i>
            </button>

            <h1>Jathu</h1>
            <img className="photo" src={jathu} alt="A photo of jathu"/>
            <h2>The Ex-Business Tycoon a.k.a. Strategy</h2>
            <p>He hates working for banks but doesn’t mind robbing one. He’ll risk it all if it’s a calculated one.</p>
            <p><span className="bold">Strength:</span> Insider trading</p>
            <p><span className="bold">Weakness:</span> Puppy cuddles</p>
        </div>
    )
}

export default JathushanModal;