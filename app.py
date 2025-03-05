from flask import Flask, render_template, request, jsonify
from llama_cpp import Llama  # Import Llama model

# Initialize Flask app
app = Flask(__name__)

# Load Vyne AI model
MODEL_PATH = "/Users/vincentscomputer/vicuna-7b-v1.5-16k.Q6_K.gguf"  # Make sure this is correct
llm = Llama(model_path=MODEL_PATH, n_gpu_layers=2, n_ctx=2048)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/run-command", methods=["POST"])
def run_command():
    data = request.get_json()
    command = data.get("command", "")

    # Generate AI response using Llama model
    response = llm(f"User: {command}\nVyne:", max_tokens=100, temperature=0.7)
    return jsonify({"response": response["choices"][0]["text"].strip()})


