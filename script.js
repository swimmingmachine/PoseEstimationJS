const video = document.getElementById('video')

/*
function startVideo() {
    navigator.mediaDevices.getUserMedia(
      { video: {} },
      stream => video.srcObject = stream,
      err => console.error(err)
    )
}
*/

function startVideo() { 
    navigator.mediaDevices.getUserMedia({ video: {} }).then((mediaStream) => {
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        };
    }).catch((err) => {
        // always check for errors at the end.
        console.error(`${err.name}: ${err.message}`);
    });
}
startVideo()
