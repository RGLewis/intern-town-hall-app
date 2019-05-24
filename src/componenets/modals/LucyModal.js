import React from "react";
import lucy from "../../assets/lucy.jpg";

const LucyModal = (props) => {
    return (
        <div className="modal-container">
            <button className="modal-button" type="button" onClick={props.closeInternModal}>
                <i class="far fa-times-circle close"></i>
            </button>

            <h1>Lucy</h1>
            <img className="photo" src={lucy} alt=""/>
            <h2>The Hacker a.k.a. Marketing Science</h2>
            <p>They call her the AI whisperer. Silent but deadly,
            she’s got the ransomware to put Omnicom in their place.</p>
            <p><span className="bold">Strength:</span> Getting your social security number</p>
            <p><span className="bold">Weakness:</span> Won’t stop instagramming dogs</p>
        </div>
    )
}

export default LucyModal;