class MessageParser {
    constructor( actionProvider, state ) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("bonjour")) {
            this.actionProvider.greet();
        }

        if (lowerCaseMessage.includes("situation")) {
            this.actionProvider.handleJavascriptList();
        }

        if (lowerCaseMessage.includes("parcours") || lowerCaseMessage.includes("parcour")) {
            this.actionProvider.handleMonParcours();
        }

        if (lowerCaseMessage.includes("compétences") || lowerCaseMessage.icludes("compétences") || lowerCaseMessage.includes("competence") || lowerCaseMessage.includes("competences")) {
            this.actionProvider.handleMesCompetences();
        }
    }
}

export default MessageParser;