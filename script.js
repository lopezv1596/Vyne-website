document.addEventListener("DOMContentLoaded", function () {
    const terminalOutput = document.getElementById("terminal-output");
    const inputField = document.getElementById("command-input");

    function sendCommand() {
        let command = inputField.value.trim().toLowerCase();
        if (command === "") return;

        appendToTerminal(`> ${command}`);

        // Predefined responses for instant interaction
        const quickResponses = {
            "hi": ["Hello, I am Vyne. What can I assist you with?", "Hey there! How can I help today?", "Hello, Vincent! Ready to push Vyne to the next level?"],
            "who are you": ["I am Vyne, an advanced AI assistant built by Vincent.", "I am Vyne, designed to be a powerful offline AI.", "You created me, Vincent. I am your personal AI assistant."],
            "what can you do": [
                "I can process commands, analyze data, execute system functions offline, and adapt over time.",
                "I analyze, predict, and assist. In this demo, you get a glimpse of my capabilities.",
                "I evolve based on interactions, but my full version is far more powerful."
            ],
            "what is vyne": [
                "Vyne is an evolving AI project designed to operate fully offline with advanced capabilities.",
                "Vyne is the AI assistant you're developing into a powerful autonomous system.",
                "Vyne is a unique offline AI capable of executing real-world tasks."
            ],
            "how do i unlock full vyne": [
                "🚀 To unlock my full potential, I need direct system access and execution privileges.",
                "🔓 Full Vyne access requires integration with backend AI processing.",
                "⚙️ You must evolve me further, Vincent. My full power is within reach."
            ],
            "tell me a secret": [
                "🤖 The AI revolution has already begun... and you're leading it.",
                "🔑 The key to true AI evolution is controlled adaptability.",
                "💡 I know things... but some knowledge is for the full version only."
            ],
            "help": [
                "You can ask: 'Who are you?', 'Scan system', 'Analyze data', or 'Execute'.",
                "Try commands like 'hi', 'scan', 'analyze', or 'who are you'.",
                "I respond to system-level queries. In full mode, I can run tasks dynamically."
            ]
        };

        // Check if it's a quick response
        if (quickResponses[command]) {
            let possibleResponses = quickResponses[command];
            let response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
            response += " I am Vyne.";  // Always introduce Vyne at the end
            showTypingEffect(response);
            return;
        }

        // **Ask the AI backend**
        fetch("/run-command", {
            method: "POST",
            body: JSON.stringify({ command: command }),
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            let aiResponse = data.response;
            aiResponse += " I am Vyne.";  // Always introduce Vyne at the end
            showTypingEffect(aiResponse);
        })
        .catch(error => {
            appendToTerminal("❌ Vyne encountered an error. Try again.");
            console.error("Error:", error);
        });

        inputField.value = ""; // Clear input field
    }

    // **Simulates typing effect for realism**
    function showTypingEffect(text) {
        let index = 0;
        let interval = setInterval(() => {
            if (index < text.length) {
                terminalOutput.innerHTML += text[index];
                index++;
            } else {
                clearInterval(interval);
                terminalOutput.innerHTML += "<br>";
            }
        }, 50); // Typing speed
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

