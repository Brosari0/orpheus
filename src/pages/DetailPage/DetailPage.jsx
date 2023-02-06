import { useParams } from "react-router-dom"
import DetailCard from "../../components/DetailCard/DetailCard";

export default function DetailPage( { user, posts, updatePost } ) {
  const { id } = useParams();
  const post = posts.find((post) => post._id === id);
  if (!post) return null;

  return (
    <>
    <DetailCard user={user} post={post} updatePost={updatePost} />
    </>
  )
}