import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPost } from '../actions/index';

class PostIndex extends Component {

  render() {
    return (
      <div>
        <div className="test-xs-right">
          <Link to="posts/new" className="btn btn-primary" >
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group" >
          { this.renderPosts() }
        </ul>
      </div>
    );
  }

  renderPosts() {
    return this.props.posts.map( (post) => {
      return (
        <li className="list-group-item" key={post.id} >
          <Link to={`posts/${post.id}`} >
            <span className="pull-xs-right"> {post.categories} </span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  componentWillMount() {
    this.props.fetchPost();
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( {fetchPost}, dispatch );
// }
// Insted of using this function to map the Action Creator into the
//  component, you can jsut pas an object with the name of
//  the Action Creator { fetchPost: fetchPost }

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps, { fetchPost: fetchPost }) (PostIndex);
