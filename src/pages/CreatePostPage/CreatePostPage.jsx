import CreatePost from "../../components/CreatePost/CreatePost";

export default function CreatePostPage({ posts, setPosts}) {
  return (
    <CreatePost posts={posts} setPosts={setPosts} />
  );
}