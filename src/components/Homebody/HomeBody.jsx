import "./HomeBody.css"
import { Link } from "react-router-dom"

export default function HomeBody() {
  return (
    <div className="HomeBody">
      <h1>Once a Musician, Always a Musician</h1>
      <div>
        <h3>Beginner</h3>
        <p>Even beginners have there place in creating music. We were all beginners at some point (even the prodigies briefly). The good news is it’s all up from here! Try practicing and getting some feedback. </p>
        <Link to="/beginner"><button>Learn More</button></Link>
      </div>
      <div>
        <h3>Intermediate</h3>
        <p>This is the interesting block of musicians. Sometimes it feels like you belong here for years, but you can create amazing works of art. Share it with others and let’s all enjoy it together!</p>
        <Link to="/intermediate"><button>Learn More</button></Link>
      </div>
      <div>
        <h3>Advanced/Professional</h3>
        <p>Time to get serious. Time to tune chords properly (unless you’re a pianist) and think outside the box. There is always room to grow and enjoy amazing music.</p>
        <Link to="/advanced"><button>Learn More</button></Link>
      </div>
      <div>
        <h3>Orpheus</h3>
        <p>The Thracian Bard who was so overcome with grief he could no longer sing. For his muse Eurydice was no more. His journey tragic, but beautiful. Sadly it happens too often in this world that the best of us suffer the most. Beauty from pain. </p>
        <Link to="/orpheus"><button>Learn More</button></Link>
      </div>
    </div>
  )
}