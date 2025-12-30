# hao-backprop-test

Test project for backprop integration. A Node.js HTTP server built with Express.js framework.

## Description

This is a tutorial Node.js server that demonstrates Express.js framework usage. The server hosts two HTTP endpoints that return simple text responses.

## Prerequisites

- Node.js v18+ (v20.x recommended)
- npm v7+

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

This will install Express.js and all required dependencies.

## Running the Server

Start the server using one of the following commands:

```bash
# Using npm start script
npm start

# Or directly with Node.js
node server.js
```

The server will start and listen on `http://127.0.0.1:3000/`.

You should see the following output:

```
Server running at http://127.0.0.1:3000/
```

## Available Endpoints

| Endpoint | Method | Description | Response |
|----------|--------|-------------|----------|
| `/` | GET | Root endpoint | `Hello, World!\n` |
| `/evening` | GET | Evening greeting endpoint | `Good evening` |

### Endpoint Details

#### GET /

Returns a "Hello, World!" greeting message.

**Response:**
- Content-Type: `text/plain`
- Body: `Hello, World!\n`

#### GET /evening

Returns a "Good evening" greeting message.

**Response:**
- Content-Type: `text/plain`
- Body: `Good evening`

## Testing

You can test the endpoints using `curl` commands:

### Test the root endpoint

```bash
curl http://localhost:3000/
```

**Expected output:**
```
Hello, World!
```

### Test the evening endpoint

```bash
curl http://localhost:3000/evening
```

**Expected output:**
```
Good evening
```

### Test 404 handling

```bash
curl http://localhost:3000/invalid
```

**Expected output:**
Express.js will return a 404 Not Found response for undefined routes.

## Technology Stack

- **Runtime:** Node.js v20.x
- **Framework:** Express.js v5.2.1
- **Module System:** CommonJS

## Project Structure

```
.
├── server.js        # Main server application with Express.js routes
├── package.json     # Project configuration and dependencies
├── package-lock.json # Locked dependency versions
└── README.md        # This documentation file
```

## License

This project is for testing and tutorial purposes.
