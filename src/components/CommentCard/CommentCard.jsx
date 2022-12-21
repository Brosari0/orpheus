import "./CommentCard.css";

export default function CommentCard({ comment }) {
  return (
    <div className="CommentCard">
      <div className="comment-name">
      {comment.userName} commented
      </div>
      <div className="comment-content">
      {comment.content}
      </div>
    </div>
  )
} 