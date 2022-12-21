import "./CommunityBody.css";

export default function CommunityBody() {
  return (
    <div className="CommunityBody">
      <div className="quote left">
        <p>“I think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. No matter what culture we're from, everyone loves music."</p>
        <br/> <br/>
        <p>As human beings, we need to know that we are not alone, that we are not crazy or
         completely out of our minds, that there are other people out there who feel as we do, live as we do, love
          as we do, who are like us.
        </p>
        <br/> <br/>
        <p>I consider myself to be an inept pianist, a bad singer, and a merely competent songwriter. What I do, in my opinion, is by no means extraordinary.</p>
        <div className="right">- Billy Joel</div>
      </div>
      <div>
        <img className="right" src="https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjYxNjgwNjUx/billy-joel-9354859-3-raw.jpg" alt="" />
      </div>
      <div className="span-2">
        <p className="statement">Bringing people together to enjoy music is our goal. Reaching out to help others,
          jamming along with friends, seriously chasing a dream of creating something beautiful
          and be remembered. We may get here for different reasons, but in the end we're all just
          trying to enjoy what we love. Music.
        </p>
        <a className="community" href="">Join our community today</a>
      </div>
    </div>
  )
}