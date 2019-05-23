import React from "react";
import doo from "../../assets/doo.jpg";


const DoModal = (props) => {
    return (
        <div className="modal-container">
            <button className="modal-button" type="button" onClick={props.closeInternModal}>
                <i class="far fa-times-circle close"></i>
            </button>

            <h1>Do</h1>
            <img className="photo" src={doo} alt="A photo of doo"/>
            <h2>The Hypnosis a.k.a. UX Design</h2>
            <p>He doesn’t like talking to people, but when he does
            his melodic voice gets passwords out of them.</p>
            <p><span className="bold">Strength:</span> Seduction</p>
            <p><span className="bold">Weakness:</span> Attracted to bagels</p>
        </div>
    )
}

export default DoModal;