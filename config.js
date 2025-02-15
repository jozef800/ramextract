// ✅ Define SCAM_SERVER for WebSocket connection
// ✅ Use localhost WebSocket server for testing
const SCAM_SERVER = "ws://127.0.0.1:5000";  // Use 127.0.0.1 instead of localhost

// ✅ Validate SCAM_SERVER
if (!SCAM_SERVER.startsWith("ws://") && !SCAM_SERVER.startsWith("wss://")) {
    console.error("❌ Invalid SCAM_SERVER URL. Please check config.js.");
}
