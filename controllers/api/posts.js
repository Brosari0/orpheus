const Post = require('../../models/post')

module.exports = {
  getMedia,
  create,
}

async function create(req, res) {
  req.body.user = req.user._id
  const post = new Post(req.body)
  console.log(post);
  post.save();
  res.json(post);
}

async function getMedia() {
  let mediaStream = null;
  mediaStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: { width: 1280, height: 720}
  });
  let video = document.querySelector('video');
  video.srcObject = mediaStream;

  video.onloadedmetadata = function(evt) {
    video.play();
  }

  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let vidSave = document.getElementById('vidSave');
  let mediaRecorder = new MediaRecorder(mediaStream);
  let chunks = [];

  start.addEventListener('click', (evt) => {
    mediaRecorder.start();
  });
  stop.addEventListener('click', (evt) => {
    mediaRecorder.stop();
  });
  mediaRecorder.ondataavailable = function(evt) {
    chunks.push(evt.data);
  }
  mediaRecorder.onstop = (evt) => {
    let blob = new Blob(chunks, { 'type': 'video/mp4;' });
    chunks = [];
    let videoURL = window.URL.createObjectURL(blob);
    vidSave.src = videoURL;
  }
}

async function useless() {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true});
  remoteStream = new MediaStream();
}