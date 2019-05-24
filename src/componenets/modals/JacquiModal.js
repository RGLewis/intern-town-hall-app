import React from "react";
import jacqui from "../../assets/jacqui.jpg";

const JacquiModal = (props) => {
    return (
        <div className="modal-container">
            <button className="modal-button" type="button" onClick={props.closeInternModal}>
                <i class="far fa-times-circle close"></i>
            </button>

            <h1>Jacqui</h1>
            <img className="photo" src={jacqui} alt=""/>
            <h2>The Watcher a.k.a. Copywriter</h2>
            <p>She’s the internet stalker who makes maps out of everyone’s search history. Rumours are she’s an alien hive mind.</p>
            <p><span className="bold">Strength:</span> Digging up dirt</p>
            <p><span className="bold">Weakness:</span> Writing too much bagel erotica</p>
        </div>
    )
}

export default JacquiModal;