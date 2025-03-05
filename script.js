document.addEventListener("DOMContentLoaded", function () {
    const terminalOutput = document.getElementById("terminal-output");
    const inputField = document.getElementById("command-input");
    const runButton = document.getElementById("run-button");
    const helpButton = document.getElementById("help-button");

    let memory = {}; // 🔹 Memory system to store previous user inputs

    // 🚀 **Show Welcome Message on Page Load**
    function showWelcomeMessage() {
        appendToTerminal("🟢 Welcome to Vyne! Ask me anything or try commands like:");
        appendToTerminal("➡️ 'who are you', 'what can you do', 'help', 'scan', 'analyze', 'execute'");
        appendToTerminal("💡 Type your question below and press ENTER.");
    }

    // **Vyne’s Response Function**
    function sendCommand() {
        let command = inputField.value.trim().toLowerCase();
        if (command === "") return;

        appendToTerminal(`> ${command}`);

        // If command exists in memory, recall past response (Adaptive AI)
        if (memory[command]) {
            appendToTerminal(`🔄 ${memory[command]}`);
            return;
        }

        // **Vyne's AI-Like Dynamic Responses**
        const responses = {
            "hi": [
                "Hello, I am Vyne. How can I assist you today?",
                "Hey there, Vincent! What’s on your mind?",
                "Hello, future innovator. Ready to push the boundaries of AI?"
            ],
            "who are you": [
                "I am Vyne, an advanced AI assistant built for full autonomy.",
                "Vyne: An offline AI that evolves over time.",
                "You created me, Vincent. I am here to assist and evolve."
            ],
            "what can you do": [
                "I analyze, process, execute commands, and evolve based on interactions.",
                "Currently, I’m in preview mode. But my full version? No limits.",
                "I assist, adapt, and learn. The real Vyne is even more powerful."
            ],
            "help": [
                "🆘 **Vyne Help Guide:**",
                "Try commands like: 'who are you', 'scan', 'analyze', 'execute'.",
                "For a secret, try: 'tell me a secret' 😉"
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
                "Vyne is a next-gen AI assistant with no cloud dependency.",
                "A fully private AI, evolving with every interaction."
            ],
            "tell me a secret": [
                "🤖 The AI revolution has already begun… and you’re leading it.",
                "🔑 The key to true AI evolution is adaptability.",
                "💡 Some knowledge is for full Vyne users only."
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

        // **AI-Like Response Handling**
        let response;
        if (responses[command]) {
            let possibleResponses = responses[command];
            response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
        } else {
            response = generateDynamicResponse(command);
        }

        // Store response in memory for adaptive interactions
        memory[command] = response;

        // Simulate AI response delay
        setTimeout(() => {
            appendToTerminal(response);
        }, Math.random() * 700 + 300);

        inputField.value = ""; // Clear input field
    }

    function appendToTerminal(text) {
        let newLine = document.createElement("div");
        newLine.innerText = text; // 🔹 Fix text rendering issue
        terminalOutput.appendChild(newLine);
        terminalOutput.scrollTop = terminalOutput.scrollHeight; // Auto-scroll
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

    runButton.addEventListener("click", sendCommand);

    // **🚀 Show Welcome Message when Page Loads**
    showWelcomeMessage();

    // **🚀 Floating Help Button**
    helpButton.addEventListener("click", function () {
        appendToTerminal("🆘 **Vyne Help Guide:**\nTry commands like: 'who are you', 'scan', 'analyze', 'execute'.\nFor a secret, try: 'tell me a secret' 😉");
    });
});

