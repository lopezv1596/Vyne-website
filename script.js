function sendCommand() {
    let inputField = document.getElementById("command-input");
    let command = inputField.value.trim();

    if (command === "") return;

    let terminalOutput = document.getElementById("terminal-output");
    terminalOutput.innerHTML += "> " + command + "<br>";

    // Fake AI Processing Effect
    setTimeout(() => {
        let responses = {
            "scan": "Scanning files... ✅",
            "analyze": "Analyzing system... 🧠",
            "execute": "Executing command... ⚡",
        };

        let response = responses[command.toLowerCase()] || "Unknown command. Try 'scan', 'analyze', or 'execute'.";
        terminalOutput.innerHTML += response + "<br>";
    }, 1000);

    inputField.value = "";
}

