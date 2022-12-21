import { useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import * as commentsAPI from "../../utilities/comments-api";
import * as postsAPI from "../../utilities/posts-api";
import "./DetailCard.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailCard({ post, user, posts }) {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    content: ''
  });

  useEffect(() => {
    async function updatePost() {
      post = posts.find((post) => post._id === id);
      setComments(post.comments)
    }
    updatePost();
  }, [post])

  function handleChange(evt) {
    setFormData({content: evt.target.value});
  }

  async function handleSubmit(evt) {
    evt.preventDefault(); 
    formData._id = post._id
    const updatedPost = await commentsAPI.create(formData);
    setComments(updatedPost.comments);
    setFormData({
      content: ''
    });
  }

  async function handleEdit() {
  }
  
  async function handleDelete() {
    await postsAPI.deletePost(post._id); 
  }

  return (
  <>
  {
    user.email === post.user.email ? 
    <div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
    :
    ''
  }
      <div>
        <div className="detail-video-aside">
          {
            post.url.includes("mp4") ?
            <video className="detail-video-list" controls src={`${post.url}`}></video>
            : 
            <iframe allowFullScreen={true} className="detail-video-list" src={`${post.url}`} frameborder="0"></iframe>
          }
          <h4 className="detail-title">
          {post.title}
          </h4>
        </div>
      </div>
    <aside className="detail-aside">
      <div className="detail-name">
      {/* {post.user.name} */}
      </div>

      <p className="detail-description">
      {post.description}
        </p>
      </aside>
      <div>
        <h3>Comment Section:</h3>
        <form className="detail-form" onSubmit={handleSubmit}>
          <label>Make a New Comment:</label>
          <input type="text" value={formData.content} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        <p>
          { 
            comments.map((comment) => (
            <CommentCard comment={comment} key={comment._id} />
          ))}
        </p>
      </div>
    </>
  )
}