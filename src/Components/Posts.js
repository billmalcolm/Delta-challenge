import React from 'react';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
    render() {

        const posts = this.props.Posts

        return (
            <div className="posts">
                <h2>All Posts</h2>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <Link to={`post/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Posts