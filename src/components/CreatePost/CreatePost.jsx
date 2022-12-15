import { useState } from "react"
import "./CreatePost.css"
import * as postsAPI from "../../utilities/posts-api"

export default function CreatePost({posts, setPosts}) {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    media: ''
  });

  function handleChange(evt) {
    setFormData({[evt.target.name]: evt.target.value})
    console.log(formData);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    let { title, url, description, media } = formData
    console.log("formdata:", formData);
    const payload = { title, url, description, media }
    console.log("payload:", payload);
    const newPost = await postsAPI.create(payload);
    setPosts([...posts, newPost]);
    setFormData({
      title: '',
      url: '',
      description: '',
      media: ''
    });
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
      chunks = [];
      let videoURL = window.URL.createObjectURL(blob);
      setFormData({ media: videoURL })
      vidSave.src = videoURL;
    }
  }

  // async function handleGetMedia() {
  //   let stream = await postsAPI.getMedia();
  // }

  return (
    <>
    <h1>Create a Post</h1>
    <form className="CreatePost" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input name="title" type="text" value={formData.title} onChange={handleChange}/>
      <label>URL (If YouTube):</label>
      <input name="url" type="text" value={formData.url} onChange={handleChange}/>
      <label>Description:</label>
      <input name="description" type="text" value={formData.description} onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
    <button id="start">Start</button><button id="stop">Stop</button>
      <button onClick={handleGetMedia}>Get Media</button>
      <video id="video" autoPlay width={"700px"} controls muted></video>
      <video id="vidSave" width={"650px"} controls></video>
    </>
  )
}
