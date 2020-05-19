import React, { useState, useEffect } from 'react';
import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Posts from './Components/Posts.js';
import PostDetail from './Components/PostDetail.js';
import UserDetail from './Components/UserDetail';

function App() {

  const [state, setState] = useState({ posts: [], users: [], comments: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {

    const postData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postData.json();

    const userData = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await userData.json();

    const commentData = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await commentData.json();

    setState({ posts: posts, users: users, comments: comments })
    setLoading(false)
  }

  if (loading) {
    return <p>Loading...</p>
  } else {
    return (
      <Router>
        <div className="container">
          <header>
            <h1><Link to={'/'}>A clever blog title</Link></h1>
          </header>
          <Switch>
            <Route exact path="/" render={(props) => <Posts {...props} Posts={state.posts} />} />
            <Route path="/post/:id" render={(props) => <PostDetail {...props} Posts={state.posts} Comments={state.comments} Users={state.users} />} />
            <Route path="/user/:id" render={(props) => <UserDetail {...props} Users={state.users} />} />
          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;
