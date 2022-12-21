import { useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import * as commentsAPI from "../../utilities/comments-api";
import * as postsAPI from "../../utilities/posts-api";
import "./DetailCard.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function DetailCard({ post, updatePost }) {
  const [newComment, setNewComment] = useState('')

  async function handleSubmit(evt) {
    evt.preventDefault(); 
    const updatedPost = await commentsAPI.create(newComment, post._id);
    updatePost(updatedPost);
    setNewComment('')
  }

  
  // async function handleDelete() {
  //   await postsAPI.deletePost(post._id); 
  // }

  return (
  <>
      <div className="detail-body">
        <div className="detail-video-aside">
          {
            post.url.includes("mp4") ?
            <video className="detail-video-list" controls src={`${post.url}`}></video>
            : 
            <iframe allowFullScreen={true} className="detail-video-list" src={`${post.url}`}></iframe>
          }
          <h4 className="detail-title">
          {post.title}
          </h4>
        </div>
      </div>
    <aside className="detail-aside">
      <p className="detail-description">
        {post.description}
      </p>
    </aside>
      <div>
        <h3>Comment Section:</h3>
        <form className="detail-form" onSubmit={handleSubmit}>
          <label>Make a New Comment:</label>
          <input required type="text" value={newComment} onChange={(evt) => setNewComment(evt.target.value)} />
          <button type="submit">Submit</button>
        </form>
        <div>
          { 
            post.comments.map((comment) => (
            <CommentCard comment={comment} key={comment._id} />
          ))}
        </div> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
        {/* Temporary until I fix the css for the footer ^ */}
        <Footer /> 

      </div>
    </>
  )
}