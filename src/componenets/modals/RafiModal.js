import React from "react";
import rafi from "../../assets/rafi.jpg";

const RafiModal = (props) => {
    return (
        <div className="modal-container">
            <button aria-label="close modal" className="modal-button" type="button" onClick={props.closeInternModal}>
                <i aria-hidden="true" className="far fa-times-circle close"></i>
            </button>

            <h1>Rafaela</h1>
            <img className="photo" src={rafi} alt="a black and white headshot of Rafi"/>
            <h2>The Timer a.k.a. Dev</h2>
            <p>She’s been around the world, even in an episode of The Romanoffs. Now she’s making sure everybody makes their mark.</p>
            <p><span className="bold">Strength:</span> Knows when you’ll die</p>
            <p><span className="bold">Weakness:</span> Melts around dogs</p>
        </div>
    )
}

export default RafiModal;