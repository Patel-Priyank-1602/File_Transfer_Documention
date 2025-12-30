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
      { id: "roadmap", title: "Roadmap", icon: "Map" },
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

A production-grade offline file transfer and collaboration system built with Python and Flask, designed for high-speed, reliable, and secure communication across devices connected to the same local network.

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
# Installation

Get started with the Local Network File Transfer Server in minutes.

## Requirements

- Python 3.10 or higher
- pip package manager
- Local network or mobile hotspot
- 2GB+ available RAM recommended

## Quick Start

Clone the repository and install dependencies:

\`\`\`bash
git clone <repository-url>
cd local-file-transfer-server
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
HOTSPOT_SSID=YourNetworkName
HOTSPOT_PASSWORD=YourSecurePassword
HOTSPOT_IP=192.168.1.1
PORT=8000
ADMIN_USERNAME=admin
ADMIN_PASSWORD=SecureAdminPassword123
SECRET_KEY=your-secret-key-here
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
# Architecture Overview

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
      { id: "data-flow", title: "Data Flow" },
    ],
  },
  features: {
    id: "features",
    title: "Features",
    icon: "Zap",
    content: `
# Feature Breakdown

Comprehensive overview of all system capabilities.

## File Transfer

- **Chunk-based parallel upload**: Files are split into chunks and uploaded simultaneously
- **Multi-stream download**: HTTP range support for parallel downloading
- **Real-time progress**: Speed and progress reporting during transfers
- **Large file support**: Tested with files exceeding 10GB
- **Data integrity validation**: Checksum verification ensures file integrity

## Collaboration

- **Global chat system**: Real-time messaging between all connected users
- **System messages**: Automated notifications for user events
- **User presence tracking**: See who's online in real-time

## Administration

- **Role-based access control**: Server and Client permission levels
- **User moderation**: Kick and disconnect users as needed
- **File management**: Delete files and control access
- **Activity monitoring**: Comprehensive logging of all actions
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
# File Transfer Lifecycle

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
# Security Model & Permissions

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
    ],
  },
  usage: {
    id: "usage",
    title: "Usage Guide",
    icon: "BookOpen",
    content: `
# Usage Guide

Step-by-step instructions for server operators and clients.

## Server Workflow

1. **Start the server**
   \`\`\`bash
   python app.py
   \`\`\`

2. **Login as administrator** using configured credentials

3. **Share QR code** with users for quick network connection

4. **Monitor users and transfers** through the admin dashboard

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
- **Downloads**: Most or least downloaded

## Filtering

Apply filters to narrow results:

- **Uploader**: Show files from specific users
- **File type**: Documents, images, archives, etc.
- **Date range**: Files from specific time periods

## Example Usage

\`\`\`
Search: "report"
Filter: PDF files only
Sort: Newest first
\`\`\`
    `,
    subsections: [
      { id: "search-capabilities", title: "Search Capabilities" },
      { id: "sorting-options", title: "Sorting Options" },
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

## Administrative Actions

All admin actions are logged with:
- Timestamp
- Admin username
- Action performed
- Affected user/file
    `,
    subsections: [
      { id: "user-management", title: "User Management" },
      { id: "file-management", title: "File Management" },
    ],
  },
  api: {
    id: "api",
    title: "API Reference",
    icon: "Code",
    content: `
# API Reference

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
    ],
  },
  performance: {
    id: "performance",
    title: "Performance",
    icon: "Gauge",
    content: `
# Performance Design & Optimizations

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
| Concurrent users | 50+ |
| Transfer speed | Network limited |
| Memory usage | < 500MB typical |

## Optimization Tips

- Use wired connections when possible
- Ensure adequate disk space for temp files
- Monitor system resources during heavy usage
    `,
    subsections: [
      { id: "transfer-optimizations", title: "Transfer Optimizations" },
      { id: "benchmarks", title: "Benchmarks" },
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
[TIMESTAMP] [LEVEL] [CATEGORY] Message
[2024-01-15 10:30:45] [INFO] [UPLOAD] User 'john' uploaded 'report.pdf' (2.5MB)
\`\`\`

## Auto-Save

- Logs are automatically saved on graceful shutdown
- Periodic log rotation prevents unbounded growth
- Historical logs available for analysis
    `,
    subsections: [
      { id: "log-categories", title: "Log Categories" },
      { id: "log-format", title: "Log Format" },
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
    ],
  },
  roadmap: {
    id: "roadmap",
    title: "Roadmap",
    icon: "Map",
    content: `
# Roadmap

Planned features and improvements for future releases.

## Upcoming Features

### Version 2.0
- [ ] End-to-end encryption for transfers
- [ ] Private file sharing between specific users
- [ ] Folder upload support
- [ ] File compression option

### Version 2.1
- [ ] Mobile application (iOS/Android)
- [ ] File preview for common formats
- [ ] Drag-and-drop interface improvements
- [ ] Batch download as ZIP

### Version 2.2
- [ ] Plugin system for extensibility
- [ ] Custom themes support
- [ ] Advanced search with regex
- [ ] File versioning

## Long-term Goals

- Multi-language support
- Distributed server mode
- Integration APIs
- Desktop application

## Contributing

Contributions are welcome. Check the repository for:
- Open issues
- Feature requests
- Pull request guidelines
    `,
    subsections: [
      { id: "upcoming-features", title: "Upcoming Features" },
      { id: "long-term-goals", title: "Long-term Goals" },
    ],
  },
};
