document.addEventListener("DOMContentLoaded", function () {
    const terminalOutput = document.getElementById("terminal-output");
    const inputField = document.getElementById("command-input");
    const helpButton = document.getElementById("help-button");

    // 🟢 **Show Welcome Message on Page Load**
    function showWelcomeMessage() {
        appendToTerminal("🟢 Welcome to Vyne! Ask me anything or try commands like:");
        appendToTerminal("➡️ 'who are you', 'what can you do', 'help', 'scan', 'analyze', 'execute'");
        appendToTerminal("💡 Type your question below and press ENTER.");
    }

    // 🔹 **AI-Like Typing Effect**
    function typeResponse(text) {
        let index = 0;
        const speed = 40;
        let newLine = document.createElement("div");
        terminalOutput.appendChild(newLine);
        function typeChar() {
            if (index < text.length) {
                newLine.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeChar, speed);
            }
        }
        typeChar();
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    // **Vyne's AI-Like Dynamic Responses**
    function sendCommand() {
        let command = inputField.value.trim().toLowerCase();
        if (command === "") return;

        appendToTerminal(`> ${command}`);

        // 🔥 Vyne's Intelligence
        const responses = {
            "hi": ["Hello, I am Vyne. What can I assist you with?", "Hey Vincent, ready to push the boundaries of AI?"],
            "who are you": ["I am Vyne, an advanced AI assistant built for true autonomy.", "Vyne: Fully private, offline, and always evolving."],
            "what can you do": ["I analyze, process, execute commands, and evolve based on interactions.", "I assist, adapt, and learn. The real Vyne is even more powerful."],
            "help": ["🆘 **Vyne Help Guide:**\nTry commands like: 'who are you', 'scan', 'analyze', 'execute'.\nFor a secret, try: 'tell me a secret' 😉"],
            "scan": ["🔍 Scanning system files... (Demo Mode: Limited access)", "🛠 Running diagnostics... (Preview Mode)"],
            "analyze": ["📊 Analyzing system performance... (Basic insights provided)", "🔬 Running predictive analysis... (Demo Mode)"],
            "execute": ["⚡ Running process... (Restricted in demo)", "💾 Executing offline script... (Limited capabilities here)"],
            "what is vyne": ["Vyne is an offline AI designed for maximum privacy and adaptability.", "A fully private AI, evolving with every interaction."],
            "tell me a secret": ["🤖 The AI revolution has already begun… and you’re leading it.", "🔑 The key to true AI is controlled adaptability."]
        };

        let response;
        if (responses[command]) {
            let possibleResponses = responses[command];
            response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
        } else {
            response = generateDynamicResponse(command);
        }

        // Simulate AI "thinking" delay
        appendToTerminal("🤖 Processing...");
        setTimeout(() => {
            typeResponse(response);
        }, Math.random() * 1000 + 500);

        inputField.value = "";
    }

    function appendToTerminal(text) {
        let newLine = document.createElement("div");
        newLine.innerHTML = text;
        terminalOutput.appendChild(newLine);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function generateDynamicResponse(input) {
        const thoughtStarters = ["That's an interesting question...", "Analyzing... my thoughts are forming.", "A fascinating query, Vincent. Here's what I think..."];
        const insights = ["The real Vyne could execute this command.", "AI, when given autonomy, is a game-changer.", "This is just a preview. Imagine the full potential."];
        return `${thoughtStarters[Math.floor(Math.random() * thoughtStarters.length)]} ${insights[Math.floor(Math.random() * insights.length)]}`;
    }

    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendCommand();
        }
    });

    document.getElementById("run-button").addEventListener("click", sendCommand);

    // 🚀 Floating Help Button Modal
    helpButton.addEventListener("click", function () {
        appendToTerminal("🆘 **Vyne Help Guide:**\nTry commands like: 'who are you', 'scan', 'analyze', 'execute'.\nFor a secret, try: 'tell me a secret' 😉");
    });

    // 🚀 Show Welcome Message on Load
    showWelcomeMessage();
});
