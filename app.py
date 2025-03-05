from flask import Flask, render_template, request, jsonify

# Initialize Flask app with proper static and template folder settings
app = Flask(__name__, static_folder="static", template_folder="templates")


@app.route("/run-command", methods=["POST"])
def run_command():
    data = request.get_json()
    user_input = data.get("command", "")

    # Send user input to Vyne’s AI model for a real response
    response = chat_with_vyne(user_input)  

    return jsonify({"response": response})


@app.route("/run-command", methods=["POST"])
def run_command():
    """Handle system commands from the frontend."""
    try:
        data = request.get_json()
        command = data.get("command", "").strip().lower()

        # Simulated Vyne Responses
        responses = {
            "scan": "Scanning files...",
            "analyze": "Analyzing system...",
            "execute": "Executing command...",
        }

        response = responses.get(command, "Unknown command. Try 'scan', 'analyze', or 'execute'.")

        return jsonify({"response": response})

    except Exception as e:
        return jsonify({"error": f"Something went wrong: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(debug=True)

