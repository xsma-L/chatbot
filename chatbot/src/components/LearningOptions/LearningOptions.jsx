import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        {
            text: "Ma situation",
            handler: props.actionProvider.handleMaSituation,
            id: 1
        },

        {
            text: "Mon Parcours ",
            handler: props.actionProvider.handleMonParcours,
            id: 2 
        },

        {
            text: "Mes compétences",
            handler: props.actionProvider.handleMesCompetences,
            id: 3
        },

        {
            text: "Mes objectifs",
            handler: props.actionProvider.handleMesObjectifs,
            id: 4
        },

        {
            text: "Perso",
            handler: () => {},
            id: 5
        },
    ];

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

export default LearningOptions;