import { useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import * as commentsAPI from "../../utilities/comments-api";
import "./DetailCard.css";
import Footer from "../Footer/Footer";
import * as postsAPI from "../../utilities/posts-api";

export default function DetailCard({ user, post, updatePost }) {
  const [newComment, setNewComment] = useState('')

  async function handleSubmit(evt) {
    evt.preventDefault(); 
    const updatedPost = await commentsAPI.create(newComment, post._id);
    updatePost(updatedPost);
    setNewComment('')
  }


  async function handleDelete() {
    await postsAPI.deletePost(post._id); 
  }

  return (
  <>
      <div className="detail-body">
        {user.name === post.user.name ? 
          <button onClick={handleDelete}>Delete</button>
          :
          ''
        }
        <div className="detail-video-aside">
          {
            post.url.includes("mp4") ?
            <video className="detail-video-list" controls src={`${post.url}`}></video>
            : 
            <iframe title={`${post.url}`} allowFullScreen={true} className="detail-video-list" src={`${post.url}`}></iframe>
          }
          <h4 className="detail-title">
          {post.title}
          </h4>
        </div>
        <aside className="detail-aside">
          <p className="detail-description">
            {post.description}
          </p>
        </aside>
        <div>
          <h3>Comment Section:</h3>
          {user ? 
          <form className="detail-form" onSubmit={handleSubmit}>
            <label>Make a New Comment:</label>
            <input required type="text" value={newComment} onChange={(evt) => setNewComment(evt.target.value)} />
            <button type="submit">Submit</button>
          </form>
          :
          ''
          }
          <div>
            { 
              post.comments.map((comment) => (
              <CommentCard comment={comment} key={comment._id} />
            ))}
          </div>
        </div>
      </div>
        <Footer /> 
    </>
  )
}