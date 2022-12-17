export default function FeedList({ post, key }) {
  return (
    <div>
    {post.title}
    {post.description}
    {post.media}
    </div>
  )
}