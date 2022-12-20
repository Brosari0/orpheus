import Footer from "../../components/Footer/Footer";
import FeedList from "../../components/FeedList/FeedList";
import "./FeedPage.css"

export default function FeedPage({ posts }) {

  return (
    <div className="structure">
    <h1>Feed Page</h1>
    {posts.map((post, idx) => (
        <div className="FeedPage">
          <FeedList post={post} key={post._id} />
        </div>
    ))}
    <Footer />
    </div>
  );
}
