export interface DocSection {
  id: string;
  title: string;
  icon: string;
  content: string;
  subsections?: { id: string; title: string }[];
}

export interface NavItem {
  id: string;
  title: string;
  icon: string;
  category?: string;
}

export const navigation: { category: string; items: NavItem[] }[] = [
  {
    category: "Getting Started",
    items: [
      { id: "introduction", title: "Introduction", icon: "Home" },
      { id: "installation", title: "Installation", icon: "Download" },
      { id: "configuration", title: "Configuration", icon: "Settings" },
    ],
  },
  {
    category: "Core Concepts",
    items: [
      { id: "architecture", title: "Architecture", icon: "Layers" },
      { id: "features", title: "Features", icon: "Zap" },
      { id: "file-transfer", title: "File Transfer", icon: "Upload" },
      { id: "security", title: "Security", icon: "Shield" },
    ],
  },
  {
    category: "Guides",
    items: [
      { id: "usage", title: "Usage Guide", icon: "BookOpen" },
      { id: "search-engine", title: "Search Engine", icon: "Search" },
      { id: "admin", title: "Administration", icon: "UserCog" },
    ],
  },
  {
    category: "Reference",
    items: [
      { id: "api", title: "API Reference", icon: "Code" },
      { id: "performance", title: "Performance", icon: "Gauge" },
      { id: "logging", title: "Logging", icon: "FileText" },
      { id: "recovery", title: "Recovery", icon: "RefreshCw" },
    ],
  },
  {
    category: "Resources",
    items: [
      { id: "faq", title: "FAQ", icon: "HelpCircle" },
    ],
  },
];

export const documentation: Record<string, DocSection> = {
  introduction: {
    id: "introduction",
    title: "Introduction",
    icon: "Home",
    content: `
# Local Network File Transfer Server

A Production-grade offline File Transfer and collaboration system built with Python and Flask, engineered for high-speed, reliable, and secure communication between devices connected to the same Local Network.

## Overview

This system enables real-time file sharing, messaging, monitoring, and administration without requiring internet connectivity. It's built for enterprise environments where security, performance, and reliability are paramount.

## Key Capabilities

- **High-Performance Transfers**: Chunked and parallel file transfer supporting 10GB+ files
- **Real-Time Collaboration**: Global chat system with presence tracking
- **Secure Architecture**: Role-based access control with session authentication
- **Administration Tools**: User moderation, file management, and activity logging
- **Offline-First**: Fully functional without internet connectivity
- **QR Onboarding**: Quick device setup via QR code scanning
    `,
    subsections: [
      { id: "overview", title: "Overview" },
      { id: "key-capabilities", title: "Key Capabilities" },
    ],
  },
  installation: {
    id: "installation",
    title: "Installation",
    icon: "Download",
    content: `
# Getting Started

Get started with the Local Network File Transfer Server in minutes.

## Requirements

- Python 3.10 or higher
- pip package manager
- Local network or mobile hotspot
- 2GB+ available RAM recommended

## Quick Start

Clone the repository and install dependencies:

\`\`\`bash
git clone https://github.com/Patel-Priyank-1602/File_Transfer.git
cd File_Transfer
pip install -r requirements.txt
\`\`\`

## Verify Installation

Run the following command to verify the installation:

\`\`\`bash
python --version
pip list | grep Flask
\`\`\`

## Next Steps

After installation, proceed to the Configuration section to set up your environment variables and start the server.
    `,
    subsections: [
      { id: "requirements", title: "Requirements" },
      { id: "quick-start", title: "Quick Start" },
    ],
  },
  configuration: {
    id: "configuration",
    title: "Configuration",
    icon: "Settings",
    content: `
# Environment Configuration

The server is configured through environment variables defined in a \`.env\` file.

## Environment Variables

Create a \`.env\` file in the project root with the following variables:

\`\`\`bash
# --- Hotspot Details ---
HOTSPOT_SSID=YourHotspotName
HOTSPOT_PASSWORD=YourHotspotPassword
HOTSPOT_IP=YourHotspotIp
PORT=8000

# --- Admin Credentials ---
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password

# --- App Settings ---
SECRET_KEY=your_secret_key_change_this
UPLOAD_FOLDER=shared_files
\`\`\`

## Configuration Reference

| Variable | Description | Required |
|----------|-------------|----------|
| HOTSPOT_SSID | Network name for QR code generation | Yes |
| HOTSPOT_PASSWORD | Network password | Yes |
| HOTSPOT_IP | Server IP address | Yes |
| PORT | Server port (default: 8000) | No |
| ADMIN_USERNAME | Administrator username | Yes |
| ADMIN_PASSWORD | Administrator password | Yes |
| SECRET_KEY | Session encryption key | Yes |
|UPLOAD_FOLDER | Folder for storing shared files | Yes |

## How to Find Your IP Address (Windows/ macOS)

Open Command Prompt and run:

\`\`\`bash
ipconfig
\`\`\`

Find the IPv4 Address under your active network connection and use it as the value for:

\`\`\`bash
HOTSPOT_IP=your_ipv4_address_here
\`\`\`

## Security Notes

- Use a strong, randomly generated SECRET_KEY
- Never commit the .env file to version control
- Change default credentials before production use
    `,
    subsections: [
      { id: "environment-variables", title: "Environment Variables" },
      { id: "configuration-reference", title: "Configuration Reference" },
    ],
  },
  architecture: {
    id: "architecture",
    title: "Architecture",
    icon: "Layers",
    content: `
# System Structure

The system follows a modular architecture designed for scalability and maintainability.

## High-Level Components

### Controller (Server/Host)
The central processing unit that manages all operations, user sessions, and data flow.

### Clients (Browsers & Devices)
Web-based interfaces that connect to the server for file operations and communication.

### Core Engines

- **Chunk Processing Engine**: Handles file segmentation and reassembly
- **Parallel Transfer Engine**: Manages multi-stream uploads and downloads
- **Metadata Engine**: Tracks file information and download history
- **Real-Time Communication Engine**: Powers the chat and notification system
- **Admin & Moderation Engine**: Provides administrative controls
- **Logging & Recovery Engine**: Handles activity logging and failure recovery

## Project Directory Structure

\`\`\`bash
FILE_TRANSFER/
├─ Screenshot/
├─ shared_files/
│  └─ .temp/
├─ templates/
│  ├─ chat_app.html
│  ├─ dashboard.html
│  ├─ files.html
│  └─ login.html
├─ .env
├─ .gitignore
├─ app.py
├─ requirement.txt
├─ README.md
└─ site_config.json
\`\`\`

## Configuration Reference

| Component | Description | 
|----------|-------------|
| app.py | Main server application | 
| templates/ | UI templates for web interface |
| shared_files/ | Final storage for uploaded files | 
| .env | Environment configuration | 
| site_config.json | Network & system settings | 
| Screenshot/ | Project screenshots for documentation |
| .gitignore | Files and folders excluded from version control | 
| README.md | Project documentation and usage guide | 
| requirement.txt | Python dependencies required to run the project | 

## Data Flow

\`\`\`
Client → Chunk Uploader → Temp Storage → Assembly Engine → Final Storage → Download Engine → Client
\`\`\`

## Technology Stack

- **Backend**: Python 3.10+, Flask
- **Transfer Protocol**: TCP with HTTP range support
- **Storage**: File-based with metadata indexing
- **Authentication**: Session-based with role management
    `,
    subsections: [
      { id: "high-level-components", title: "High-Level Components" },
      { id: "project-directory-structure", title: "Project Directory Structure" },
      { id: "configuration-reference", title: "Configuration Reference" },
      { id: "data-flow", title: "Data Flow" },
    ],
  },
  features: {
    id: "features",
    title: "Features",
    icon: "Zap",
    content: `
# Core Capabilities

Comprehensive overview of all system capabilities.

## File Transfer

- **Chunk-based parallel upload**: Files are split into chunks and uploaded simultaneously
- **Multi-stream download**: HTTP range support enables parallel downloading
- **Real-time progress tracking**: Live speed, ETA, and progress reporting during transfers
- **Large file support** — Tested with files exceeding 10GB
- **File audit dashboard**: Dedicated tracking panel to monitor and inspect any file’s complete history
- **Data integrity validation**: Checksum verification ensures file integrity
- **Per-file activity tracking**: Track each file’s complete lifecycle:
  - Who uploaded the file
  - Who downloaded it
  - File Size
  - How many times it was downloaded
  - Exact upload time and each download timestamp

## Collaboration

- **Global chat system**: Real-time messaging between all connected users
- **System messages**: Automated notifications for user events
- **User presence tracking**: See who's online in real-time

## Administration

- **Role-based access control** — Separate Server and Client permission levels
- **User moderation tools** — Kick, disconnect, and manage active sessions
- **Advanced file management** — Delete files and control access permissions
- **Comprehensive activity monitoring** — Full logging of all system events
- **Persistent audit logs** — When the server shuts down, all recorded activity and conversations are automatically exported to a \`.txt\` log file, including:
  - Chat history
  - Upload & download records
  - User activity
  - Administrative actions
    `,
    subsections: [
      { id: "file-transfer", title: "File Transfer" },
      { id: "collaboration", title: "Collaboration" },
      { id: "administration", title: "Administration" },
    ],
  },
  "file-transfer": {
    id: "file-transfer",
    title: "File Transfer Lifecycle",
    icon: "Upload",
    content: `
# Data Transfer Pipeline

Understanding how files move through the system from upload to download.

## Upload Process

1. **File Segmentation**: Large files are split into manageable chunks
2. **Parallel Upload**: Multiple chunks are uploaded simultaneously
3. **Temporary Storage**: Chunks are stored in a temporary location
4. **Validation**: Each chunk is validated for integrity
5. **Assembly**: Chunks are merged into the final file
6. **Integrity Check**: Final file checksum is verified
7. **Ready State**: File is marked available for download

## Download Process

1. **Request Initiation**: Client requests file download
2. **Availability Check**: System verifies file is fully assembled
3. **Range Calculation**: File is prepared for parallel streaming
4. **Multi-Stream Transfer**: Client downloads via multiple connections
5. **Client Assembly**: Downloaded segments are merged on client side

## Important Notes

- Downloads are blocked until assembly is complete
- Failed uploads trigger automatic chunk cleanup
- Incomplete files are detected and logged
    `,
    subsections: [
      { id: "upload-process", title: "Upload Process" },
      { id: "download-process", title: "Download Process" },
    ],
  },
  security: {
    id: "security",
    title: "Security Model",
    icon: "Shield",
    content: `
# Application Security Design

Comprehensive security architecture protecting your data and users.

## Role-Based Access Control

| Role | Permissions |
|------|-------------|
| Server (Admin) | Full control over all operations |
| Client (User) | Upload, Download, Chat access |

## Authentication

- **Session-based authentication**: Secure cookie-based sessions
- **CSRF protection**: All routes protected against CSRF attacks
- **Password hashing**: Secure password storage
- **Session timeout**: Automatic session expiration

## Authorization

- **Route protection**: All endpoints require authentication
- **Role verification**: Admin actions require server role
- **File ownership**: Track who uploaded each file

## Best Practices

- Regularly rotate the SECRET_KEY
- Use strong admin passwords
- Monitor access logs for suspicious activity
- Disconnect inactive sessions
    `,
    subsections: [
      { id: "role-based-access-control", title: "Role-Based Access Control" },
      { id: "authentication", title: "Authentication" },
      { id: "authorization", title: "Authorization" },
    ],
  },
  usage: {
    id: "usage",
    title: "Usage Guide",
    icon: "BookOpen",
    content: `
# Operational Manual

Step-by-step instructions for server operators and clients.

## Server Workflow

1. **Config .env file**
2. **Start the server**
\`\`\`bash
python app.py
\`\`\`

3. **Login as administrator** using configured credentials

4. **Share QR code** with users for quick network connection

5. **Monitor users and transfers** through the admin dashboard
## Client Workflow

1. **Connect to WiFi** network shown in QR code

2. **Scan QR code** or enter server URL manually

3. **Login** with provided credentials

4. **Start using the system**:
   - Upload files by selecting or dragging
   - Download available files
   - Chat with other connected users

## Tips

- For large files, ensure stable network connection
- Use the search feature to find files quickly
- Check online users before sending chat messages
    `,
    subsections: [
      { id: "server-workflow", title: "Server Workflow" },
      { id: "client-workflow", title: "Client Workflow" },
    ],
  },
  "search-engine": {
    id: "search-engine",
    title: "Search Engine",
    icon: "Search",
    content: `
# Search, Sort & Filter Engine

Powerful tools for finding and organizing files.

## Search Capabilities

Search files using multiple criteria:

- **Filename**: Partial or full filename matching
- **Username**: Filter by uploader
- **Extension**: Find files by type (.pdf, .zip, etc.)

## Sorting Options

Sort the file list by:

- **Name**: Alphabetical ordering
- **Size**: Largest or smallest first
- **Date**: Newest or oldest uploads

## Filtering

Apply filters to narrow results:

- **< 50 MB**: Files smaller than 50 MB
- **> 50 MB**: Files larger than 50 MB

## Example Usage

\`\`\`
Search: "report"
Filter: <50 MB
Sort: Date
\`\`\`
    `,
    subsections: [
      { id: "search-capabilities", title: "Search Capabilities" },
      { id: "sorting-options", title: "Sorting Options" },
      { id: "filtering", title: "Filtering" },
    ],
  },
  admin: {
    id: "admin",
    title: "Administration",
    icon: "UserCog",
    content: `
# Admin & Moderation System

Tools and capabilities available to server administrators.

## User Management

- **View online users**: Real-time list of connected clients
- **Kick users**: Disconnect problematic users
- **Monitor sessions**: Track user activity and session status

## File Management

- **Delete files**: Remove unwanted or policy-violating content
- **View metadata**: Access detailed file information
- **Track downloads**: See download history and counts

## Activity Monitoring

- **Real-time logs**: Watch system activity as it happens
- **Chat history**: Review all chat messages
- **Transfer history**: Complete upload/download records

## Audit & Logging System

- **Chat log archive**: All messages saved
- **Transfer log archive**: All upload/download records saved
- **Global activity log**: Every action recorded with
  - Timestamp
  - Admin username
  - Action performed
  - Affected user/file
- **Shutdown persistence**: On server stop, the system automatically writes all activity, chat, and transfer history into a structured \`.txt\` log file.
    `,
    subsections: [
      { id: "user-management", title: "User Management" },
      { id: "file-management", title: "File Management" },
      { id: "activity-monitoring", title: "Activity Monitoring" },
      { id: "audit-logging-system", title: "Audit & Logging System" },
    ],
  },
  api: {
    id: "api",
    title: "API Reference",
    icon: "Code",
    content: `
# Developer Documentation

Major API endpoints for integration and advanced usage.

## File Operations

| Route | Method | Description |
|-------|--------|-------------|
| /upload_chunk | POST | Upload a file chunk |
| /download_parallel | GET | Download with range support |
| /files | GET | List all available files |
| /file/<id> | GET | Get file metadata |

## User Operations

| Route | Method | Description |
|-------|--------|-------------|
| /login | POST | Authenticate user |
| /logout | POST | End session |
| /online_users | GET | List connected users |

## Chat Operations

| Route | Method | Description |
|-------|--------|-------------|
| /chat/send | POST | Send a message |
| /chat/messages | GET | Retrieve messages |

## Admin Operations

| Route | Method | Description |
|-------|--------|-------------|
| /admin/kick_user | POST | Disconnect a user |
| /admin/delete_file | DELETE | Remove a file |
| /admin/logs | GET | View activity logs |
    `,
    subsections: [
      { id: "file-operations", title: "File Operations" },
      { id: "user-operations", title: "User Operations" },
      { id: "chat-operations", title: "Chat Operations" },
      { id: "admin-operations", title: "Admin Operations" },
    ],
  },
  performance: {
    id: "performance",
    title: "Performance",
    icon: "Gauge",
    content: `
# Optimization Overview

Engineering decisions that ensure high performance.

## Transfer Optimizations

- **Parallel TCP streams**: Multiple connections for faster transfers
- **Chunk-based I/O**: Efficient memory usage for large files
- **Streaming responses**: Data flows without full buffering
- **Range requests**: Resume interrupted downloads

## Resource Management

- **Thread pool execution**: Controlled concurrency
- **Minimal memory footprint**: Process chunks, not entire files
- **Connection pooling**: Reuse established connections
- **Garbage collection**: Automatic cleanup of temporary data

## Benchmarks

Tested performance characteristics:

| Metric | Result |
|--------|--------|
| Max file size | 10GB+ |
| Upload speed (Controller) | Up to 100 MB/s |
| Upload speed (Client) | Up to 50 MB/s |
| Download speed (ZIP files) | Up to 450 MB/s |
| Download speed (Video files) | Up to 350 MB/s |
| Average assembly time (large files) | 4–5 seconds |
| Transfer speed | Network limited |
| Memory usage | < 500MB typical |

## Optimization Tips

- Use wired connections when possible
- Ensure adequate disk space for temp files
- Monitor system resources during heavy usage
    `,
    subsections: [
      { id: "transfer-optimizations", title: "Transfer Optimizations" },
      { id: "resource-management", title: "Resource Management" },
      { id: "benchmarks", title: "Benchmarks" },
      { id: "optimization-tips", title: "Optimization Tips" },
    ],
  },
  logging: {
    id: "logging",
    title: "Logging",
    icon: "FileText",
    content: `
# Logging & Monitoring

Comprehensive activity tracking and system monitoring.

## Log Categories

### Activity Logs
- User login/logout events
- File upload completions
- File download requests
- Chat messages sent

### System Logs
- Server start/stop
- Configuration changes
- Error conditions
- Performance metrics

### Audit Logs
- Admin actions
- Permission changes
- File deletions
- User disconnections

## Log Format

Each log entry contains:

\`\`\`
================================================================================
FILE TRANSFER SERVER - ACTIVITY LOG
Generated: 2025-12-30 15:05:44
================================================================================

TOTAL FILES: 5
--------------------------------------------------------------------------------

FILE: example.pdf
  Uploaded by: Admin
  Upload time: 2025-12-29 18:15:21
  File size: 253,559 bytes (0.24 MB)
  Total downloads: 2
  Download history:
    1. UserA - 2025-12-29 18:38:29
    2. UserB - 2025-12-29 18:38:41

--------------------------------------------------------------------------------

CHAT MESSAGES SUMMARY
================================================================================

No chat messages during this session.

================================================================================
END OF LOG
================================================================================
\`\`\`

## Auto-Save & Retention

- Logs are automatically generated and saved on graceful shutdown
- Log history is preserved for long-term analysis
- Clear separators and timestamps ensure easy auditing and troubleshooting

## Monitoring Benefits

- Enables forensic analysis of file activity
- Helps detect misuse or abnormal behavior
- Supports performance tuning and capacity planning
- Provides compliance-ready audit records
    `,
    subsections: [
      { id: "activity-logs", title: "Activity Logs" },
      { id: "system-logs", title: "System Logs" },
      { id: "audit-logs", title: "Audit Logs" },
      { id: "log-format", title: "Log Format" },
      { id: "auto-save-retention", title: "Auto-Save & Retention" },
      { id: "monitoring-benefits", title: "Monitoring Benefits" },
    ],
  },
  recovery: {
    id: "recovery",
    title: "Recovery",
    icon: "RefreshCw",
    content: `
# Failure Handling & Recovery

Robust error handling ensures system reliability.

## Graceful Shutdown

When the server stops:
1. Current transfers are completed or safely paused
2. All activity logs are saved
3. User sessions are properly terminated
4. Temporary files are cleaned up

## Error Recovery

### Upload Failures
- Incomplete chunks are automatically cleaned
- Users are notified of failed uploads
- Retry mechanisms for transient errors

### Download Failures
- Range requests allow resumption
- Partial downloads can continue
- Checksums verify completed segments

## Data Integrity

- **Checksum validation**: Every file verified after assembly
- **Incomplete detection**: System identifies partial uploads
- **Corruption prevention**: Write verification for all operations

## Recovery Procedures

1. **Check logs** for error details
2. **Clear temp files** if storage issues occur
3. **Restart server** for fresh state
4. **Verify files** using built-in integrity checks
    `,
    subsections: [
      { id: "graceful-shutdown", title: "Graceful Shutdown" },
      { id: "error-recovery", title: "Error Recovery" },
      { id: "data-integrity", title: "Data Integrity" },
      { id: "recovery-procedures", title: "Recovery Procedures" },
    ],
  },
  faq: {
    id: "faq",
    title: "FAQ",
    icon: "HelpCircle",
    content: `
# Frequently Asked Questions

Common questions and answers about the system.

## General

**Q: Can it run without internet?**

Yes, the system is designed for fully offline operation. It only requires a local network connection between devices.

**Q: What is the maximum file size?**

The system has been tested with files exceeding 10GB. The practical limit depends on available storage space.

**Q: Is download allowed during upload?**

No, files are only available for download after the upload is complete and the file has been fully assembled. This ensures data integrity.

## Technical

**Q: What browsers are supported?**

All modern browsers (Chrome, Firefox, Safari, Edge) with JavaScript enabled.

**Q: Can multiple users upload simultaneously?**

Yes, the system supports concurrent uploads from multiple users without performance degradation.

**Q: How is file integrity ensured?**

Checksums are calculated for each chunk and the final assembled file, ensuring no data corruption during transfer.

## Security

**Q: Is the transfer encrypted?**

Traffic is secured within the local network. For additional security, HTTPS can be configured.

**Q: Can users access other users' files?**

All successfully uploaded files are visible to all authenticated users. Private file storage is not currently supported.
    `,
    subsections: [
      { id: "general", title: "General" },
      { id: "technical", title: "Technical" },
      { id: "security", title: "Security" },
    ],
  },
};
