import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPostsById, deletePost } from '../actions/index';

class PostsShow extends Component {

  // This is used to get the router Component from parent Componnet
  // and set it into the router props
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPostsById(this.props.params.id)
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then( () => {
          this.context.router.push('/');
      });
  }

  render() {
    const { post } = this.props;

    if (!this.props.post) {
      return <div>Loading Post {this.props.params.id} ...</div>
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button className="btn btn-danger pull-xs-right"
                onClick={ this.onDeleteClick.bind(this) }>
                Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories {post.category}</h6>
        <p>{post.content}</p>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {post: state.posts.post};
}

// Bind the Acction Creator into the Redux dispatch
export default connect(mapStateToProps, {fetchPostsById, deletePost} ) (PostsShow);
