function generateQRCode()
{
    var text = document.getElementById("qrInput").value;
    var qrcodeElement = document.getElementById("qrcode");

    // Clear the previous QR code (if any)
    qrcodeElement.innerHTML = "";

    if (text)
    {
        // Use qrcode.js to create the QR code
        var qrcode = new QRCode(qrcodeElement, {
            text: text,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        setTimeout(() =>
        {
            qrcodeElement.classList.add('qrcode-visible');
        }, 100);
    } else
    {
        alert("Please enter some text or a URL.");
    }
}