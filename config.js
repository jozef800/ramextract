// ✅ Define SCAM_SERVER for WebSocket connection
// ✅ Use localhost WebSocket server for testing
const SCAM_SERVER = "ws://localhost:5000";  // Change this to Ngrok URL for public testing

// ✅ Validate SCAM_SERVER
if (!SCAM_SERVER.startsWith("ws://") && !SCAM_SERVER.startsWith("wss://")) {
    console.error("❌ Invalid SCAM_SERVER URL. Please check config.js.");
}
