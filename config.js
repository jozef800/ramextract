// ✅ Define SCAM_SERVER for WebSocket connection
const SCAM_SERVER = "ws://localhost:5000";  // Change this to your WebSocket server URL

// ✅ Validate SCAM_SERVER
if (!SCAM_SERVER.startsWith("ws://") && !SCAM_SERVER.startsWith("wss://")) {
    console.error("❌ Invalid SCAM_SERVER URL. Please check config.js.");
}
