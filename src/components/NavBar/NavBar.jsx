import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='NavBar'>
      <img src="https://cdn-icons-png.flaticon.com/128/3913/3913866.png" alt="🎼" />
      <Link to="/home" className='title'>Orpheus</Link>
      <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/create">Create</Link></li>
      <li><Link to="/feed">Feed</Link></li>
      <li><Link to="/community">Community</Link></li>
      <li><Link to="/support">support</Link></li>
      <li className='logout'><Link to="" onClick={handleLogOut}>Log Out</Link></li>
      </ul>
    </nav>
  );
}