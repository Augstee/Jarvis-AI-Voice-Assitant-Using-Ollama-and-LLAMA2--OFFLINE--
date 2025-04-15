from flask import Flask, render_template, request, jsonify
import requests
import json
from datetime import datetime

app = Flask(__name__)

reminders = []

def process_command(command):
    try:
        ollama_response = requests.post(
            'http://localhost:11434/api/generate',
            json={
                "model": "llama2",
                "prompt": f"Act as an AI assistant. Respond to this: {command}",
                "stream": False
            }
        )
        return ollama_response.json()['response']
    except Exception as e:
        return f"Error processing command: {str(e)}"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def handle_command():
    data = request.json
    command = data.get('command', '')
    
    response = process_command(command)
    
    if "remind" in command.lower():
        reminders.append({
            "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "text": command
        })
        response = "Reminder set successfully!"
    
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True, port=5000)