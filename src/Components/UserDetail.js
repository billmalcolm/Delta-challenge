import React from 'react';

class UserDetail extends React.Component {
    constructor(props) {
        super(props);

        this.findAuthor = this.findAuthor.bind(this);

        this.state = {
            user: {
                userName: '',
                name: '',
                email: ''
            }
        }
    }

    findAuthor() {
        const userId = this.props.match.params.id;
        const allUsers = this.props.Users;
        const author = allUsers.find(u => u.id === parseInt(userId));

        this.setState({
            user: {
                userName: author.username,
                name: author.name,
                email: author.email
            }
        })
    }

    componentDidMount() {
        this.findAuthor();
    }

    render() {
        const goBack = this.props.history.goBack

        return (
            <div>
                <h2>Author Bio</h2>
                <p>User Name: {this.state.user.userName}</p>
                <p>Name: {this.state.user.name}</p>
                <button onClick={goBack}>Go back</button>
            </div>
        )
    }
}

export default UserDetail;