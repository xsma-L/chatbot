import React from "react";

import "./MesObjectifsOptions.css";


const ObjectifsCourt = (props) => {
    const options = [
        {
            text: "Obtenir mon diplôme",
            image: "/icons/diplome.svg",
            id: 1
        },

        {
            text: "Obtenir un CDI",
            image: "/icons/work.svg",
            id: 2
        },

        {
            text: "Créer une application/site Web",
            image: "/icons/computer.svg",
            id: 3 
        },

        {
            text: "Obtenir mon permis",
            image: "/icons/car.svg",
            id: 4
        },

        {
            text: "Voyager le plus possible",
            image: "icons/travel.svg",
            id: 5
        },

        {
            text: "Vivre dans mon appartement",
            image: "/icons/house.svg",
            id: 6
        },

        {
            text: "Etre heureux à chaque instants",
            image: "/icons/happy-face.svg",
            i: 7
        },
    ];

    const optionsMarkups = options.map((option) => (
        <div
            className="objectif-court-el"
            key={option.id}
        >
            <p>{option.text}</p>
            <img src={option.image} alt={option.text}/>
        </div>
    ));

    return <div className="objectif-court-section">{optionsMarkups}</div>
};

export default ObjectifsCourt;