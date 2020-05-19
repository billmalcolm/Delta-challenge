import React from 'react';
import {
    Link
} from "react-router-dom";

class PostDetail extends React.Component {
    constructor(props) {
        super(props);

        this.fillPost = this.fillPost.bind(this);

        this.state = {
            title: '',
            body: '',
            userId: 0,
            userName: '',
            comments: []

        }
    }

    fillPost() {
        const allPosts = this.props.Posts;
        const postId = this.props.match.params.id;
        const selPost = allPosts.find(p => p.id === parseInt(postId));

        const userId = selPost.userId;
        const allUsers = this.props.Users;
        const author = allUsers.find(u => u.id === parseInt(userId));

        const allComments = this.props.Comments;
        const deezComments = allComments.filter(c => c.postId === parseInt(postId))

        this.setState({
            title: selPost.title,
            body: selPost.body,
            userId: userId,
            userName: author.username,
            comments: deezComments
        })
    }

    componentDidMount() {
        this.fillPost();
    }

    render() {
        const comments = this.state.comments;
        const commentList = comments.map((comment) =>
            <li key={comment.id}>
                <p>{comment.name}</p>
                <p>{comment.body}</p>
                <p>From: {comment.email}</p>
            </li>
        );

        return (
            <div className="post-detail">
                <h2>{this.state.title}</h2>
                <p>{this.state.body}</p>
                <p>Author: <Link to={`/user/${this.state.userId}`}>{this.state.userName}</Link></p>

                <h3>Comments</h3>
                <ul className="comments">
                    {commentList}
                </ul>
            </div>
        )
    }
}

export default PostDetail;