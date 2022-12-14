import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import CreatePostPage from '../CreatePostPage/CreatePostPage';
import CommunityPage from '../CommunityPage/CommunityPage';
import SupportPage from '../SupportPage/SupportPage';
import FeedPage from '../FeedPage/FeedPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/create" element={<CreatePostPage />} />
              <Route path="/feed" element={<FeedPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/support" element={<SupportPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
