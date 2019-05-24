import React from "react";
import devon from "../../assets/devon.jpg";

const DevonModal = (props) => {
    return (
        <div className="modal-container">
            <button className="modal-button" type="button" onClick={props.closeInternModal}>
                <i class="far fa-times-circle close"></i>
            </button>

            <h1>Devon</h1>
            <img className="photo" src={devon} alt=""/>
            <h2>The Ringleader a.k.a. Production</h2>
            <p>When shit goes down, she gets things done. She’s both the shoulder to cry on, and the reason we’re crying.</p>
            <p><span className="bold">Strength:</span> Knows everyone’s weaknesses</p>
            <p><span className="bold">Weakness:</span> Exploits that for more bagels</p>
        </div>
        
    )
}

export default DevonModal;