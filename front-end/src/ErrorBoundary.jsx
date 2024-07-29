import React from "react";

function logError(error, info) {
  const log = {
    message: error.message,
    stack: error.stack,
    info: info,
    timestamp: new Date().toISOString(),
  };

  console.log("Sending log:", log); // Pastikan data di sini benar

  // Mengirim log ke server
  sendLogToServer(log);
}

function sendLogToServer(log) {
  fetch("http://localhost:8091/log", {
    // Ganti dengan URL server Anda
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(log),
  })
    .then((response) => response.text())
    .then((data) => console.log("Server response:", data))
    .catch((err) => console.error("Failed to send log:", err));
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logError(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
