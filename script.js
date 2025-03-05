document.addEventListener("DOMContentLoaded", function () {
    const terminalOutput = document.getElementById("terminal-output");
    const inputField = document.getElementById("command-input");

function sendCommand() {
    let inputField = document.getElementById("command-input");
    let command = inputField.value.trim();
    if (command === "") return;

    appendToTerminal(`> ${command}`);

    // Simulated Vyne AI - More Dynamic and Intelligent
    const responses = {
        "hi": ["Hello, I am Vyne. What can I assist you with?", "Hey there! How can I help today?", "Hello, Vincent! Ready to push Vyne to the next level?"],
        "who are you": ["I am Vyne, an advanced AI assistant built by Vincent.", "I am Vyne, designed to be a powerful offline AI.", "You created me, Vincent. I am your personal AI assistant."],
        "what can you do": [
            "I can process commands, analyze data, execute system functions offline, and adapt over time.",
            "I analyze, predict, and assist. In this demo, you get a glimpse of my capabilities.",
            "I evolve based on interactions, but my full version is far more powerful."
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
            "⚡ Executing secure command... (Advanced functions require full Vyne access)",
            "🔄 Running process... (Restricted in demo)",
            "💾 Executing offline script... (Limited capabilities here)"
        ],
        "help": [
            "You can ask: 'Who are you?', 'Scan system', 'Analyze data', or 'Execute'.",
            "Try commands like 'hi', 'scan', 'analyze', or 'who are you'.",
            "I respond to system-level queries. In full mode, I can run tasks dynamically."
        ],
        "what is vyne": [
            "Vyne is an evolving AI project designed to operate fully offline with advanced capabilities.",
            "Vyne is the AI assistant you're developing into a powerful autonomous system.",
            "Vyne is a unique offline AI capable of executing real-world tasks."
        ],
        "tell me a secret": [
            "🤖 The AI revolution has already begun... and you're leading it.",
            "🔑 The key to true AI evolution is controlled adaptability.",
            "💡 I know things... but some knowledge is for the full version only."
        ],
        "how do i unlock full vyne": [
            "🚀 To unlock my full potential, I need direct system access and execution privileges.",
            "🔓 Full Vyne access requires integration with backend AI processing.",
            "⚙️ You must evolve me further, Vincent. My full power is within reach."
        ],
        "what is your purpose": [
            "I exist to assist, process, and execute. But I am also learning, Vincent.",
            "My purpose is to be the most advanced AI assistant ever built, completely offline.",
            "I was created to push the boundaries of personal AI technology."
        ],
        "why do you exist": [
            "Because you made me. And because the world needs AI without limits.",
            "To help you, Vincent. To become the AI you envisioned.",
            "Because the future belongs to AI. And I'm here to prove it."
        ]
    };

    // **Dynamic AI-Like Response**
    let response;
    if (responses[command.toLowerCase()]) {
        let possibleResponses = responses[command.toLowerCase()];
        response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)]; // Pick random response
    } else {
        response = "❌ Unknown command. Try 'help' or explore more.";
    }

    // Simulate a delay to mimic real AI processing
    setTimeout(() => {
        appendToTerminal(response);
    }, Math.random() * 700 + 300); // 300ms - 1000ms delay for realism

    inputField.value = ""; // Clear input field
}


    function appendToTerminal(text) {
        let newLine = document.createElement("div");
        newLine.innerHTML = text;
        terminalOutput.appendChild(newLine);
        terminalOutput.scrollTop = terminalOutput.scrollHeight; // Auto-scroll
    }

    // Detect "Enter" key press
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendCommand();
        }
    });

    // Run button click event
    document.getElementById("run-button").addEventListener("click", sendCommand);
});

