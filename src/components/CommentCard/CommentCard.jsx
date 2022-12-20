export default function CommentCard({ comment }) {
  return (
    <>
    <div>
    {comment.user.name}
    {comment.content}
    </div>
    </>
  )
} 