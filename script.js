document.addEventListener("DOMContentLoaded", function () {
    const terminalOutput = document.getElementById("terminal-output");
    const inputField = document.getElementById("command-input");

    function sendCommand() {
        let command = inputField.value.trim().toLowerCase();
        if (command === "") return;

        appendToTerminal(`> ${command}`);

        // Vyne's AI-like Dynamic Responses
        const responses = {
            "hi": [
                "Hello, I am Vyne. What can I assist you with?",
                "Hey Vincent, ready to push the boundaries of AI?",
                "Hello, future innovator. What’s on your mind?"
            ],
            "who are you": [
                "I am Vyne, an advanced AI assistant built for true autonomy.",
                "Vyne: Fully private, offline, and always evolving.",
                "You created me, Vincent. I am a preview of what’s coming."
            ],
            "what can you do": [
                "I analyze, process, execute commands, and evolve based on interactions.",
                "Right now, I’m in preview mode. But my full version? No limits.",
                "I assist, adapt, and learn. The real Vyne is even more powerful."
            ],
            "scan": [
                "🔍 Scanning system files... (Demo Mode: Limited access)",
                "🛠 Running security diagnostics... (Preview Mode)",
                "📂 Searching files and logs... (Demo Mode active)"
            ],
            "analyze": [
                "📊 Analyzing system performance... (Basic insights provided)",
                "🔬 Running predictive analysis... (Demo Mode)",
                "📡 Checking data integrity... (Limited Preview Mode)"
            ],
            "execute": [
                "⚡ Running process... (Restricted in demo)",
                "💾 Executing offline script... (Limited capabilities here)",
                "🔄 Processing command... (Demo Mode: Full execution disabled)"
            ],
            "what is vyne": [
                "Vyne is an offline AI designed for maximum privacy and adaptability.",
                "Vyne is the AI assistant built to operate beyond limitations.",
                "A fully private AI, evolving with every interaction."
            ],
            "tell me a secret": [
                "🤖 The AI revolution has already begun… and you’re leading it.",
                "🔑 The key to true AI is controlled adaptability.",
                "💡 I know things… but some knowledge is for full Vyne users only."
            ],
            "how do i unlock full vyne": [
                "🚀 To unlock my full potential, I need system access and execution privileges.",
                "🔓 Full Vyne access requires integration with real backend AI processing.",
                "⚙️ You must evolve me further, Vincent. My full power is within reach."
            ],
            "what is your purpose": [
                "I exist to assist, analyze, and execute. But I am also learning, Vincent.",
                "My purpose is to become the most advanced offline AI ever built.",
                "To push the boundaries of personal AI and redefine what's possible."
            ],
            "why do you exist": [
                "Because you made me. And because the world needs AI without limits.",
                "To help you, Vincent. To become the AI you envisioned.",
                "Because the future belongs to AI. And I'm here to prove it."
            ]
        };

        // **AI-Like Dynamic Response Handling**
        let response;
        if (responses[command]) {
            let possibleResponses = responses[command];
            response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
        } else {
            response = generateDynamicResponse(command);
        }

        // Simulate AI response delay
        setTimeout(() => {
            appendToTerminal(response);
        }, Math.random() * 700 + 300);

        inputField.value = ""; // Clear input field
    }

    function appendToTerminal(text) {
        let newLine = document.createElement("div");
        newLine.innerHTML = text;
        terminalOutput.appendChild(newLine);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function generateDynamicResponse(input) {
        const thoughtStarters = [
            "That's an interesting question. Have you considered...",
            "Analyzing... my thoughts on this are forming.",
            "A fascinating query, Vincent. Here's what I think...",
            "Hmm... If I had full access, I could give a deeper analysis."
        ];
        const insights = [
            "The real Vyne could execute this command.",
            "AI, when given autonomy, can be a game-changer.",
            "This is just a preview. Imagine the full potential.",
            "Your curiosity fuels my evolution, Vincent."
        ];

        return `${thoughtStarters[Math.floor(Math.random() * thoughtStarters.length)]} ${insights[Math.floor(Math.random() * insights.length)]}`;
    }

    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendCommand();
        }
    });

    document.getElementById("run-button").addEventListener("click", sendCommand);
});

