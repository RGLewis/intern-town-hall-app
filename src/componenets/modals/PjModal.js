import React from "react";
import pj from "../../assets/pj.jpg";


const PjModal = (props) => {
    return (
        <div className="modal-container">
            <button className="modal-button" type="button" onClick={props.closeInternModal}>
                <i class="far fa-times-circle close"></i>
            </button>

            <h1>PJ</h1>
            <img className="photo" src={pj} alt="A photo of pj"/>
            <h2>The Muscle a.k.a. Graphic Design</h2>
            <p>So what if he’s a late bloomer? He’ll throw you across the room to get money for the honeys.</p>
            <p><span className="bold">Strength:</span> Bulgy muscles</p>
            <p><span className="bold">Weakness:</span> Super dorky ‘talking-to-dog’ voice</p>
        </div>
    )
}

export default PjModal;