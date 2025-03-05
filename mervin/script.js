const generateQRCode = () => {
    const connectionURL = "https://example.com/connect?device=" + Math.random().toString(36).substr(2, 10);
    document.getElementById("connectionStatus").textContent = "Status: Ready to connect.";
    QRCode.toCanvas(document.getElementById("qrcode"), connectionURL, function (error) {
        if (error) console.error(error);
        console.log("QR code generated!");
    });
};

const startScreenMirroring = async () => {
    const videoElement = document.getElementById('remoteScreen');
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    videoElement.srcObject = stream;

    // You can send this stream over WebRTC or WebSocket for remote sharing.
};

document.getElementById("generateQR").addEventListener("click", generateQRCode);
document.getElementById("startMirroring").addEventListener("click", startScreenMirroring);







document.getElementById("generateQR").addEventListener("click", () => {
    const qrCodeDiv = document.getElementById("qrcode");
    qrCodeDiv.innerHTML = ""; // Clear any previous QR code

    // Replace 'https://your-backend-url.com' with your actual backend URL
    

    document.getElementById("connectionStatus").textContent = "Status: Ready to connect.";

    QRCode.toCanvas(
        connectionURL,
        { width: 200 },
        (error, canvas) => {
            if (error) {
                console.error("Error generating QR code:", error);
                return;
            }
            qrCodeDiv.appendChild(canvas);
        }
    );
});