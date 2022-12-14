import "./SupportBody.css"

export default function SupportBody() {
  return (
    <div className="SupportBody">
      <div className="header">
        Need support? Here are some FAQ's:
      </div>
      <div className="question">Can't post a YouTube link? 
        <div className="answer">
          Some YouTube videos are not embeddable
          If you are trying to upload someone else's video they might not 
          allow you to embed it into this site. If it's your video make sure 
          you are allowing embeds on your YouTube Channel
        </div>
      </div>
      <div className="question">Having trouble recodring your audio/video?
        <div className="answer">
          Make sure you're allowing your microphone and/or camera to be used on your browser. 
          Also check your connections and try to unplug and plug your devices back in. 
        </div>
      </div>
      <div className="question">Can't load other posts?
        <div className="answer">
          Sometimes others might post invalid links. If this problem is happening with all posts
          try checking your connection. Some browsers will not support the files we use on this site.
        </div>
      </div>
      <div className="question">Low quality audio?
        <div className="answer">
          When a video is first created it takes time to compile. Try coming back to the video in 
          a few minutes. If the problem persists it may be your own connection
        </div>
      </div>
    </div>
  )
}