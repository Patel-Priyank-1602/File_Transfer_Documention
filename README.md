# 🚀 FileTransfer — Local Network File Transfer & Collaboration System

A **production-grade offline file transfer and collaboration platform** built with **Python & Flask**, designed for **high-speed, secure, and reliable** communication between devices on the same local network.

> Transfer large files (10GB+), chat in real time, manage users, and monitor activity — **without any internet connection.**

---

## 🌐 Documentation Website

📘 **Full Documentation:**  
👉 [https://lftdocs.netlify.app/](https://lftdocs.netlify.app/)

---

## ✨ Key Features

### 🔁 High-Performance Transfers
- Chunk-based parallel uploads  
- Multi-stream downloads with HTTP range support  
- Real-time progress tracking (speed, ETA, completion)
- Tested with files **over 10GB**

### 🔐 Secure & Offline
- Role-based access control (Admin / Client)
- Session-based authentication
- CSRF protection & password hashing
- Fully functional **without internet**

### 💬 Real-Time Collaboration
- Global chat system
- Online user presence tracking
- System notifications

### 🛠 Admin & Monitoring Tools
- User moderation (kick, manage sessions)
- File management & permissions
- Full activity logging & audit trails
- Automatic export of logs on shutdown

### ⚡ Performance Optimized
- Parallel TCP streams
- Thread pool execution
- Streaming I/O
- Low memory footprint

---

## 🧩 Tech Stack

- **Backend:** Python 3.10+, Flask  
- **Transfer:** TCP + HTTP Range Requests  
- **Storage:** File-based with metadata indexing  
- **Auth:** Session-based, role-based permissions  
- **UI:** HTML / CSS / JS (Flask templates)

---

## 🖥 Quick Start

### 📦 Requirements

- Python 3.10+
- pip
- Local WiFi / Hotspot
- 2GB+ RAM recommended

### ⚙ Installation

```bash
git clone https://github.com/Patel-Priyank-1602/File_Transfer.git
cd File_Transfer
pip install -r requirements.txt
```

▶ Run Server
```bash
python app.py
```

Open in browser:
```bash
http://YOUR_IP:8000
```

### 📡 Supported Network Modes
- WiFi Network
- Ethernet + Mobile Hotspot
- QR-Based Client Onboarding

🔄 File Transfer Pipeline
```bash
Client → Chunk Upload → Temp Storage → Assembly Engine → Final Storage → Download Engine → Client
```

### 🔒 Security Model
- Role-based permissions
- CSRF protection
- Secure password hashing
- Full audit logging

### 📊 Performance Benchmarks
- Max file size	10GB+
- Upload speed	Up to 100 MB/s
- Download speed	Up to 450 MB/s
- Memory usage	< 500 MB
- Assembly time	4–5 sec
