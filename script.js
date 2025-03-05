document.addEventListener("DOMContentLoaded", function () {
    const terminalOutput = document.getElementById("terminal-output");
    const inputField = document.getElementById("command-input");

    function sendCommand() {
        let command = inputField.value.trim();
        if (command === "") return;

        appendToTerminal(`> ${command}`);

        // Simulated Vyne responses (sneak peek)
        const responses = {
            "hi": "Hello, I am Vyne. What can I assist you with?",
            "who are you": "I am Vyne, an advanced AI assistant built by Vincent.",
            "what can you do": "I can process commands, analyze data, and execute system functions offline.",
            "scan": "🔍 Scanning system files... (demo mode: limited access)",
            "analyze": "📊 Analyzing system performance... (demo mode: basic insights)",
            "execute": "⚡ Executing secure command... (full version required for advanced execution)",
            "help": "Try commands like 'hi', 'scan', 'analyze', or 'who are you'.",
        };

        // Response logic
        let response = responses[command.toLowerCase()] || "❌ Unknown command. Try 'help'.";

        // Simulate a delay to feel more like real AI processing
        setTimeout(() => {
            appendToTerminal(response);
        }, 600);

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

