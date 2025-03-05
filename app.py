from flask import Flask, render_template, request, jsonify

app = Flask(__name__, static_folder="static", template_folder="templates")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/run-command", methods=["POST"])
def run_command():
    data = request.get_json()
    command = data.get("command", "").lower()

    responses = {
        "hi": "Hello, I am Vyne. What can I assist you with?",
        "who are you": "I am Vyne, an advanced AI assistant built by Vincent.",
        "what can you do": "I analyze, predict, and assist. In this demo, you get a glimpse of my capabilities.",
        "scan": "🔍 Scanning system files... (Demo Mode)",
        "analyze": "📊 Analyzing system performance... (Preview Mode)",
        "execute": "⚡ Executing secure command... (Restricted in demo)",
        "help": "You can ask: 'Who are you?', 'Scan system', 'Analyze data', or 'Execute'."
    }

    response = responses.get(command, "❌ Unknown command. Try 'help'.")
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)

