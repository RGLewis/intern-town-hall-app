import React from "react";
import wren from "../../assets/wren.jpg";

const WrenModal = (props) => {
    return (
        <div className="modal-container">
            <button className="modal-button" type="button" onClick={props.closeInternModal}>
                <i class="far fa-times-circle close"></i>
            </button>

            <h1>Wren</h1>
            <img className="photo" src={wren} alt="A photo of wren"/>
            <h2>The Decoy a.k.a. Dev</h2>
            <p>When he dresses up for conventions, he’s a crowd favourite. Now he’s getting past security in a doggy disguise.</p>
            <p><span className="bold">Strength:</span> Can really get into character</p>
            <p><span className="bold">Weakness:</span> Forgot he’s not a dog</p>
        </div>
    )
}

export default WrenModal;