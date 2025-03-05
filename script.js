document.addEventListener("DOMContentLoaded", function () {
    const terminalOutput = document.getElementById("terminal-output");
    const inputField = document.getElementById("command-input");

    function sendCommand() {
        let command = inputField.value.trim().toLowerCase();
        if (command === "") return;

        appendToTerminal(`> ${command}`);

        // Simulated Vyne AI - Intelligent Responses
        const responses = {
            "hi": ["Hello, I am Vyne. What can I assist you with?", "Hey there! How can I help today?"],
            "who are you": ["I am Vyne, an advanced AI assistant created by Vincent."],
            "what can you do": [
                "I can analyze, execute commands, and assist with data tasks.",
                "In this demo, I respond to commands. My full version is much more powerful."
            ],
            "scan": ["🔍 Scanning system files... (Demo Mode: Limited Access)"],
            "analyze": ["📊 Analyzing system performance... (Preview Mode)"],
            "execute": ["⚡ Running command... (Demo Mode: Full Execution Disabled)"],
            "help": [
                "You can try: 'Who are you?', 'Scan system', 'Analyze data', 'Execute', or 'Tell me a secret'.",
                "Try commands like 'hi', 'scan', 'analyze', or 'who are you'."
            ],
            "tell me a secret": [
                "🤖 The AI revolution has begun... and you're leading it.",
                "🔑 Controlled adaptability is the key to real AI evolution."
            ],
            "what is vyne": [
                "Vyne is an advanced offline AI designed by Vincent to operate without cloud dependencies."
            ]
        };

        // Pick a random response
        let response = responses[command] ? responses[command][Math.floor(Math.random() * responses[command].length)] : "❌ Unknown command. Try 'help'.";

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

    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendCommand();
        }
    });

    document.getElementById("run-button").addEventListener("click", sendCommand);
});

