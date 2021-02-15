class ActionProvider {
    constructor( createChatBotMessage, setStateFunc, createClientMessage ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    slowShow = () => {
        const wantMore = this.createChatBotMessage(
            "Voulez-vous savoir quelque chose d'autre à mon sujet ?", 
                {
                    widget: "learningOptions",
                }
            );

        this.updateChatbotState(wantMore);
    }

    handleMesObjectifs = () => {
        const message = this.createChatBotMessage(
            "C'est une bonne question, voulez-vous connaître mes objectifs à court ou long terme ?",
            {
                widget: "ObjectifsOptions",
            }
        );


        this.updateChatbotState(message);
    };

    handleMesObjectifsLong = () => {
    }; 
    
    handleMesObjectifsCourt = () => {
        const message = this.createChatBotMessage(
            "Voici mes objectifs à court termes:",
            {
                widget: "ObjectifsCourt",
            }
        );

        this.updateChatbotState(message);

        setTimeout(() => {
            this.slowShow();
        }, 5000);
    }

    handleMonParcours = () => {
        let text = "Après avoir effectué un bac pro électrotechnique, j'ai effectué quelques emplois (employé de rayon, livreur de repas, employé de musée). \r À l'issue de cela, j'ai découvert la webac@démie qui est une formation de 2 ans dans le web. Je m'y suis inscrit et me voilà actuellement en deuxième année en Développement Web."

        const message = this.createChatBotMessage( text );

        this.updateChatbotState(message);

        setTimeout(() => {
            this.slowShow();
        }, 5000);
    }

    handleMaSituation = () => {
        let text = "Je suis étudiant en seconde année en Développement Web à la Webac@démie By Epitech et je suis activement à la recherche d'une alternance.";

        const message = this.createChatBotMessage(text);

        this.updateChatbotState(message);

        setTimeout(() => {
            this.slowShow();
        }, 5000);
    }

    handleMesCompetences = () => {
        const message = this.createChatBotMessage(
            "Voici les languages et outils que j'utilise: ",
            {
                widget: "mesCompetences",
            }
        );

        setTimeout(() => {
            this.slowShow();
        }, 5000);

        this.updateChatbotState(message);
    }

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;