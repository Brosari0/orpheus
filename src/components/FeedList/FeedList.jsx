import "./FeedList.css"

export default function FeedList({ post }) {

  return (
    <div  className="FeedList">
      <div className="name">
      {post.user.name}
      </div>
      <h4 className="title">
      {post.title}
      </h4>
      <div>
      {
        post.url.includes("mp4") ?
        <video className="feed-video" controls src={`${post.url}`}></video>
        : 
        <iframe className="feed-video" src={`${post.url}`} frameborder="0"></iframe>
      }
      </div>
      <p className="description">
      {post.description}
      <button>Comments</button>
      </p>
    </div>

  )
}