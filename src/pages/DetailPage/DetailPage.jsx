import { useEffect } from "react";
import { useParams } from "react-router-dom"
import DetailCard from "../../components/DetailCard/DetailCard";

export default function DetailPage( { posts } ) {
  const { id } = useParams();
  const post = posts.find((post) => post._id === id);
  
  return (
    <>
    <DetailCard post={post}/>
    </>
  )
}