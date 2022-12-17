import Footer from "../../components/Footer/Footer";
import FeedList from "../../components/FeedList/FeedList";

export default function FeedPage({ posts }) {

  return (
    <>
    <h1>Feed Page</h1>
    {/* {posts.map((post) => (
      {post.media.map((media) => ( */}
        <ul>
        <li>
        {/* <FeedList post={post} key={post.id} /> */}
        </li>
      </ul>
        {/* ))}
    ))} */}
    <Footer />
    </>
  );
}