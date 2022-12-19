import "./FeedList.css"
import "./practice.css"

export default function FeedList({ post }) {

  return (
    <div  className="FeedList">
    <div>
      {post.user.name}
      {post.title}
      {post.description}
      {post.url.includes("mp4") ?
        <video id="feed-video" controls src={`${post.url}`}></video>
        : 
        <iframe src={`${post.url}`} frameborder="0"></iframe>
      }
    </div>
    </div>
  )
}