import { useEffect } from "react";
import { useParams } from "react-router-dom"
import DetailCard from "../../components/DetailCard/DetailCard";

export default function DetailPage( { posts, user } ) {
  const { id } = useParams();
  const post = posts.find((post) => post._id === id);

  return (
    <>
    <DetailCard user={user} post={post}/>
    </>
  )
}