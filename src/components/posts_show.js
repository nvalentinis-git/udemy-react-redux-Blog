import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPostsById } from '../actions/index';

class PostsShow extends Component {

  componentWillMount() {
    this.props.fetchPostsById(this.props.params.id)
  }

  render() {
    return (
      <div>
        Show Posts
        {this.props.params.id}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {post: state.post};
}

// Bind the Acction Creator into the Redux dispatch
export default connect(null, {fetchPostsById} ) (PostsShow);
