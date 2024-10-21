// Accessing the webcam
const video = document.getElementById('webcam');
const canvas = document.getElementById('snapshot');
const ctx = canvas.getContext('2d');

// Set up the webcam feed
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((err) => {
        console.error("Error accessing webcam: ", err);
    });

// Function to capture image based on button clicked
function captureImage(action) {
    // Draw the current video frame on the canvas
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas data to an image
    const image = canvas.toDataURL('image/png');

    // Display the captured image in the respective div
    const imgElement = document.createElement('img');
    imgElement.src = image;

    // Select the correct div based on the action
    const targetDiv = document.getElementById(`${action}_image`);
    targetDiv.innerHTML = ''; // Clear any previous image
    targetDiv.appendChild(imgElement); // Add the new captured image
}
