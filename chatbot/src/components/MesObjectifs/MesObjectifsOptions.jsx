import React from "react";

import "./MesObjectifsOptions.css";

const ObjectifsChoices = (props) => {
    const options = [
        {
            text: "A court terme",
            handler: props.actionProvider.handleMesObjectifsCourt,
            id: 1
        },

        {
            text: "A long terme",
            handler: props.actionProvider.handleMesObjectifsLong,
            id: 2
        },
    ]


    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>    
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>
};

export default ObjectifsChoices;