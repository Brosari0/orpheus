import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-text">
      <Link><div>Mobile</div></Link>
      <Link to={"/community"}><div>Community</div></Link>
      <a href="https://generalassemb.ly/" target={"_blank"}>Company</a>
      <div><strong>Orpheus</strong></div>
      <Link to={"/support"}><div>Help</div></Link>
      <Link><div>Blog</div></Link>
      <Link><div>Resources</div></Link>
      </div>
      <hr />
      <footer>© Orpheus, Inc. 2022. We love our users!</footer>
    </div>
  )
}