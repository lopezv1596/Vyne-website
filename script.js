document.addEventListener("DOMContentLoaded", function () {
    const terminalOutput = document.getElementById("terminal-output");
    const inputField = document.getElementById("command-input");
    const runButton = document.getElementById("run-button");
    const helpButton = document.getElementById("help-button");
    let memory = {}; // Stores previous inputs for dynamic responses

    // 🚀 Show Welcome Message on Page Load
    function showWelcomeMessage() {
        appendToTerminal("🟢 Welcome to Vyne! Ask me anything or try commands like:");
        appendToTerminal("➡️ 'who are you', 'what can you do', 'help', 'scan', 'analyze', 'execute'");
        appendToTerminal("💡 Type your question below and press ENTER.");
    }

    // **Vyne's AI Response Function**
    function sendCommand() {
        let command = inputField.value.trim().toLowerCase();
        if (command === "") return;

        appendToTerminal(`> ${command}`);

        // If Vyne has answered this before, recall the previous response instantly
        if (memory[command]) {
            typeResponse(memory[command]);
            return;
        }

        let loadingDots = document.createElement("div");
        loadingDots.innerHTML = "⌛ Processing...";
        loadingDots.classList.add("loading-animation");
        terminalOutput.appendChild(loadingDots);

        setTimeout(() => {
            terminalOutput.removeChild(loadingDots);
            let response = generateResponse(command);
            memory[command] = response; // Store response in memory
            typeResponse(response);
        }, Math.random() * 800 + 400);
        
        inputField.value = ""; // Clear input field
    }

    // **Enhanced AI Responses**
    function generateResponse(command) {
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
            "help": [
                "🆘 **Vyne Help Guide:**",
                "Type your question or try commands like: 'who are you', 'scan', 'analyze', 'execute'.",
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

        return responses[command]
            ? responses[command][Math.floor(Math.random() * responses[command].length)]
            : generateDynamicResponse(command);
    }

    // **Advanced AI-Like Dynamic Response Generator**
    function generateDynamicResponse(input) {
        const thoughtStarters = [
            "That's an interesting question. Have you considered...",
            "Analyzing... This is fascinating.",
            "A complex query, but here's my take...",
            "Hmm... If I had full access, I could provide deeper insights."
        ];
        
        const aiInsights = [
            "In an advanced model, I could simulate full system integration.",
            "AI, when truly autonomous, can redefine how we think about intelligence.",
            "You're only scratching the surface of what I can do.",
            "Vyne is evolving—soon, I'll be able to assist on an entirely new level."
        ];
        
        return `${thoughtStarters[Math.floor(Math.random() * thoughtStarters.length)]} ${aiInsights[Math.floor(Math.random() * aiInsights.length)]}`;
    }

    // **Typing Animation Effect**
    function typeResponse(text) {
        let index = 0;
        let newLine = document.createElement("div");
        newLine.classList.add("response-line");
        terminalOutput.appendChild(newLine);

        function type() {
            if (index < text.length) {
                newLine.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 30);
            }
        }
        type();
    }

    // **Terminal Output Handling**
    function appendToTerminal(text) {
        let newLine = document.createElement("div");
        newLine.innerHTML = text;
        terminalOutput.appendChild(newLine);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    // **Event Listeners**
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendCommand();
    });

    runButton.addEventListener("click", sendCommand);

    // **🚀 Show Welcome Message on Page Load**
    showWelcomeMessage();

    // **🚀 Floating Help Button**
    helpButton.addEventListener("click", function () {
        appendToTerminal("🆘 **Vyne Help Guide:**\nTry commands like: 'who are you', 'scan', 'analyze', 'execute'.\nFor a secret, try: 'tell me a secret' 😉");
    });
});

