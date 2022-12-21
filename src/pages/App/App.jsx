import { useState, useEffect } from 'react';
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
import BeginnerPage from '../BeginnerPage/BeginnerPage';
import IntermediatePage from '../IntermediatePage/IntermediatePage';
import AdvancedPage from '../AdvancedPage/AdvancedPage';
import OrpheusPage from '../OrpheusPage/OrpheusPage';
import * as postsAPI from '../../utilities/posts-api';
import DetailPage from '../DetailPage/DetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    async function displayPosts() {
      const postData = await postsAPI.find();
      setPosts(postData);
    }
    displayPosts();
  }, []);

  function updatePost(updatedPost) {
    const idx = posts.findIndex((p) => p._id === updatedPost._id);
    const postsCopy = [...posts];
    postsCopy[idx] = updatedPost;    
    setPosts(postsCopy);
  }
  
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CreatePostPage setPosts={setPosts} posts={posts} />} />
              <Route path="/feed" element={<FeedPage posts={posts} />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/beginner" element={<BeginnerPage />} />
              <Route path="/intermediate" element={<IntermediatePage />} />
              <Route path="/advanced" element={<AdvancedPage />} />
              <Route path="/orpheus" element={<OrpheusPage />} />
              <Route path="/feed/:id" element={<DetailPage updatePost={updatePost} posts={posts} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
