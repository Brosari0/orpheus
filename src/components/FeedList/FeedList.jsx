import { Link } from "react-router-dom"
import DetailPage from "../../pages/DetailPage/DetailPage"
import "./FeedList.css"

export default function FeedList({ post }) {
  return (
    <div  className="FeedList">
      <aside className="feed-aside">

          <h4 className="feed-title">
          {post.title}
          </h4>
      <p className="feed-description">
      {post.description}
      <Link to={`/feed/${post._id}`}><button>Comments</button></Link>
        </p>
      </aside>
      <div>
        <div className="feed-video-aside">
          <div className="feed-name">
            {post.user.name}
          </div>
          {
            post.url.includes("mp4") ?
            <video className="feed-video-list" controls src={`${post.url}`}></video>
            : 
            <iframe className="feed-video-list" src={`${post.url}`} frameborder="0"></iframe>
          }
        </div>
      </div>
    </div>

  )
}