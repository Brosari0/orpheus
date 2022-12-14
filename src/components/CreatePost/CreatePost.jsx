import { useState } from "react"
import "./CreatePost.css"

export default function CreatePost({posts, setPosts}) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    description: '',
  });

  function handleChange(evt) {
    setFormData({[evt.target.name]: evt.target.value})
  }

  return (
    <>
    <h1>Create a Post</h1>
    <form className="CreatePost">
      <label>Title:</label>
      <input name="title" type="text" value={formData.title} onChange={handleChange}/>
      <label>URL (If YouTube):</label>
      <input name="content" type="text" value={formData.content} onChange={handleChange}/>
      <label>Description:</label>
      <input name="description" type="text" value={formData.description} onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}