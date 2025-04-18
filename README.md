# Jarvis-Voice-Assistant

# 🧠 JARVIS - Offline AI Voice Assistant using LLaMA2 + Ollama

Welcome to **JARVIS**, an intelligent offline voice assistant powered by Meta's **LLaMA2** and running through **Ollama** on your local machine. JARVIS is designed to help with tasks like taking notes, setting reminders, and answering user queries — all without requiring an internet connection. Your data stays with you, always.

## 🔥 Key Features

- 🧠 **Local AI Model (LLaMA2 via Ollama)** — No internet or cloud needed.
- 💬 Accepts text commands (voice can be added optionally).
- 📝 Take and store personal notes in a local `.txt` file.
- ⏰ Set reminders — stored locally with timestamps.
- 🔐 Completely offline and privacy-focused.
- 🚀 Fast, customizable, and works with low-latency on modern devices.

---

## 🎯 Project Objective

The main goal behind JARVIS is to develop a fully **offline**, AI-powered assistant that respects user privacy, works without the internet, and is completely free to use. In a world increasingly dependent on cloud-based services, JARVIS shows how advanced AI capabilities can still be achieved **locally**, ensuring user data is never sent elsewhere.

This was developed for academic and research purposes and demonstrates how to integrate LLMs (Large Language Models) with modern Python tools.

---

## 🧠 How It Works

- The **LLaMA2** model is run using the **Ollama** platform locally.
- JARVIS takes a user command from the UI (via Streamlit or Flask).
- The command is sent to Ollama's local API (`http://localhost:11434/api/generate`).
- Ollama returns a natural language response from LLaMA2.
- JARVIS then:
  - Saves notes to a local file if the command includes "note".
  - Stores reminders with timestamps if the command includes "remind".
  - Otherwise, simply returns an AI-generated response to the user.

---

## 🛠️ Tech Stack

| Tech         | Purpose                          |
|--------------|----------------------------------|
| **Python**   | Main programming language        |
| **Ollama**   | Run LLaMA2 model locally         |
| **LLaMA2**   | AI model for generating replies  |
| **Streamlit**| UI frontend for interaction      |
| **Flask** *(optional)* | Alternate lightweight backend |
| **Local files** | Note/reminder persistence     |

---

## 📂 Project Structure

```
jarvis/
├── server.py             # Flask-based backend logic
├── app.py (optional)     # For Streamlit-based frontend
├── notes.txt             # Local notes storage
├── requirements.txt      # Python dependencies
├── templates/
│   └── index.html        # Web UI for Flask (if used)
```

---

## 🚀 How to Run Locally

> **⚠️ JARVIS runs locally using Ollama. Internet is NOT required after setup.**

### 🔧 Step 1: Install Ollama

Download and install from [https://ollama.com](https://ollama.com).

Then, open your terminal and run:
```bash
ollama run llama2
```

This will download and prepare the LLaMA2 model locally.

---

### 🔧 Step 2: Clone This Repo

```bash
git clone https://github.com/your-username/jarvis-ai-assistant.git
cd jarvis-ai-assistant
```

### 🔧 Step 3: Install Python Requirements

```bash
pip install -r requirements.txt
```

---

### 🔧 Step 4: Run JARVIS

You can run with either **Flask** or **Streamlit**:

#### Flask Version:
```bash
python server.py
```
Visit: `http://localhost:5000`

#### Streamlit Version (Recommended for UI):
```bash
streamlit run app.py
```
Visit: Localhost link provided by Streamlit (e.g., `http://localhost:8501`)

---

## 🌐 Why It’s Not Online

JARVIS is intentionally designed to be **offline-first**. Hosting it publicly would require:
- Running Ollama on a cloud server (not supported or permitted for public LLaMA2 deployment).
- Exposing local models online (against the project’s goal of privacy and offline usage).

> **⚠️ Hosting JARVIS online would defeat its core purpose.**

This project is best demonstrated on local machines where privacy and control are paramount.

---

## 🧪 Use Cases

- Take private meeting notes.
- Set personal task reminders without any external sync.
- Ask LLaMA2 basic factual or conversational questions.
- Build an offline productivity tool for students, developers, and researchers.

---

## 🧩 Future Enhancements

- 🎙️ Add speech-to-text and text-to-speech (voice control).
- 🧠 Extend memory using vector stores like ChromaDB or FAISS.
- 🗃️ GUI application with PyQt or Electron + Python backend.
- 🔐 Add local encryption for notes and reminders.
- 📱 Package as a mobile/offline desktop app.

---

## 👩‍🏫 Academic Disclaimer

This project was created as part of a final year/semester academic requirement.

> **Due to the offline-first nature of the project, we are unable to provide a public link, as it relies on a locally hosted LLaMA2 model via Ollama which cannot be deployed online for free or securely.**

---

## 🧑‍💻 Author

- **Your Name:** [Your GitHub](https://github.com/Augstee)
- **Email:** augustinepc666@gmail.com

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Let me know if you want this pushed into an actual GitHub repo or if you'd like it as a downloadable `.md` file!
