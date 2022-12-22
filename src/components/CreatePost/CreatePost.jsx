import { useState, useEffect } from "react"
import "./CreatePost.css"
import * as postsAPI from "../../utilities/posts-api"

export default function CreatePost({posts, setPosts}) {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
  });
  const [recording, setRecording] = useState(false);

  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    function getMedia() {
      handleGetMedia();
    }
    getMedia();
  }, [])

  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value});
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      let { title, url, description } = formData
      const payload = { title, url, description }
      if (videoData) {
        let vidForm = new FormData();
        vidForm.append('title', formData.title);
        vidForm.append('video', videoData);
        let video = await postsAPI.upload(vidForm);
        payload.url = video.url;
      }
      setFormData({
        title: '',
        url: '',
        description: '',
      });
      const newPost = await postsAPI.create(payload);
      setPosts([...posts, newPost]);
    } catch {
      return "Validation Failed"
    }
  }

  async function handleGetMedia() {
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
      setVideoData(blob);
      chunks = [];
      let videoURL = window.URL.createObjectURL(blob);
      vidSave.src = videoURL;
    }
  }

  // async function handleGetMedia() {
  //   let stream = await postsAPI.getMedia();
  // }

  return (
    <div className="CreatePost">
    <form className="create-form" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input name="title" type="text" value={formData.title} onChange={handleChange} required />
      <label>URL (If YouTube):</label>
      <input name="url" type="text" value={formData.url} onChange={handleChange}/>
      <label>Description:</label>
      <input name="description" type="text" value={formData.description} onChange={handleChange}/>
      <button type="submit">Submit</button>
        <button 
          style={{"visibility": recording ? "visible" : "hidden"}} 
          onClick={() => setRecording(!recording)} id="stop">Stop
        </button>
        <button 
          style={{"visibility": recording ? "hidden" : "visible"}} 
          onClick={() => setRecording(!recording)} id="start">Start
        </button>
    </form>
    <div className="vid-body">
      <video id="video" autoPlay width={"500px"} controls muted></video>
      <video id="vidSave" width={"500px"} controls></video>
    </div>
    </div>
  )
}
