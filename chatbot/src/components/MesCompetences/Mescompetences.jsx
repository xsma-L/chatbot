import React from "react";

import "./Mescompetences.css";

const Mescompetences = (props) => {
    const options = [
        {
            text: "HTML",
            data: "/icons/html.svg",
            id: 1
        },
        
        {
            text: "CSS",
            data: "/icons/css.svg",
            id: 2
        },

        {
            text: "Javascript",
            data: "/icons/javascript.svg",
            id: 3
        },

        {
            text: "SQL",
            data: "icons/sql.svg",
            id: 4
        },

        {
            text: "PHP",
            data: "/icons/php.svg",
            id: 5
        },

        {
            text: "NodeJS",
            data: "/icons/nodejs.svg",
            id: 6
        },

        {
            text: "Laravel",
            data: "/icons/laravel.svg",
            id: 7
        },

        {
            text: "Symfony",
            data: "/icons/symfony.svg",
            id: 8
        },

        {
            text: "React",
            data: "/icons/react.svg",
            id: 9
        },

        {
            text: "Docker",
            data: "/icons/docker.svg",
            id: 10
        },

        {
            text: "Git",
            data: "/icons/git.svg",
            id: 11
        },

        {
            text: "Scrum Méthode Agile",
            data: "/icons/scrum.svg",
            id: 12
        },
    ];

    const optionsMarkup = options.map((option) => (
        <div 
            className="competences-data"
            key={option.id}
        >
            <span>
                <img src={option.data} alt={option.text} />
                <p className="image-desc">
                    {option.text}
                </p>
            </span> 
        </div>    
    ));
    
    return <div className="competences-options-container">{optionsMarkup}</div>

    };

    export default Mescompetences;