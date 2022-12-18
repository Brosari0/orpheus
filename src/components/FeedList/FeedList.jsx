import "./FeedList.css"
import "./practice.css"
import { getVidSource } from "../../utilities/posts-api"

export default function FeedList({ post }) {
  async function getVid() {
    const src = await getVidSource(post);
    return post.url = src
  }

  return (
    <div  className="FeedList">
    <div>
      {post.user.name}
      {post.title}
      {post.description}
      <video src={`${post.url}`}></video>
    </div>
    </div>
  )
}