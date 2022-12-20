import "./DetailCard";

export default function DetailCard({ post }) {

  return (
  <>
      <div>
        <div className="detail-video-aside">
          {
            post.url.includes("mp4") ?
            <video className="detail-video-list" controls src={`${post.url}`}></video>
            : 
            <iframe className="detail-video-list" src={`${post.url}`} frameborder="0"></iframe>
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
    </>
  )
}