import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Avatar from "./AvatarCustom";
import LearningOptions from "../components/LearningOptions/LearningOptions";
import MesCompetences from "../components/MesCompetences/Mescompetences";
import MesObjectisOptions from "../components/MesObjectifs/MesObjectifsOptions";
import MesObjectifsCourt from "./MesObjectifs/MesobjectifsCourt";
import LinkList from "./LinkList/LinkList";

const config = {
    botName: "IsmaBot",
    initialMessages: [createChatBotMessage(`Bonjour, je suis Ismaël, que voulez-vous savoir sur moi ?`, 
        { widget: "learningOptions", }),
    ],

    customComponents: {
        botAvatar: (props) => <Avatar {...props} />
    },

    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },

        {
            widgetName: "mesCompetences",
            widgetFunc: (props) => <MesCompetences {...props} />,
        },

        {
            widgetName: "ObjectifsOptions",
            widgetFunc: (props) => <MesObjectisOptions {...props} />,
        },

        {
            widgetName: "ObjectifsCourt",
            widgetFunc: (props) => <MesObjectifsCourt {...props} />,
        },

        {
            widgetName: "javascrpitLinks",
            widgetFunc: (props) => <LinkList {...props} />,

            props: {
                options: [
                    {
                        text: "introduction JS",
                        url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",

                        id: 1
                    },

                    {
                        text: "Mozilla JS Guide",
                        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                        id: 2 
                    },

                    {
                        text: "Frontend Masters",
                        url: "https://frontendmasters.com",
                        id: 3
                    }
                ]
            }
        },

    ],

    customStyles: {
        botMessageBox:{
            backgroundColor: "#367B7E",
        },
        chatButton: {
            backgroundColor: "#367B7E",
        },
        
    },
};

export default config;