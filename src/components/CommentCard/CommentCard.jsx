export default function CommentCard({ comment }) {
  console.log(comment);
  return (
    <>
    <div>
    {comment.userName}
    {comment.content}
    </div>
    </>
  )
} 