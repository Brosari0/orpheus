import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import FeedList from "../../components/FeedList/FeedList";
import * as postsAPI from '../../utilities/posts-api';
import "./FeedPage.css"

export default function FeedPage({ setPosts, posts }) {

  useEffect(() => {
  async function displayPosts() {
    const postData = await postsAPI.find();
    setPosts(postData);
  }
  displayPosts();
  }, []);

  return (
    <div className="structure">
    <h1>Welcome to Orpheus! Listen to some wonderful people below! </h1>
    {posts.map((post, idx) => (
        <div className="FeedPage">
          <FeedList post={post} key={post._id} />
        </div>
    ))}
    <Footer />
    </div>
  );
}
