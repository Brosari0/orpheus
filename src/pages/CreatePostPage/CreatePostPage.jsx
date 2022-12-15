import CreatePost from "../../components/CreatePost/CreatePost";
import Footer from "../../components/Footer/Footer";

export default function CreatePostPage({ posts, setPosts}) {
  return (
    <>
    <CreatePost posts={posts} setPosts={setPosts} />
    <Footer />
    </>
  );
}