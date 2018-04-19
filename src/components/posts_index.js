import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPost } from '../actions/index';

class PostIndex extends Component {

  render() {
    return (
      <div className="test-xs-right">
        <Link to="posts/new" className="btn btn-primary" >
          Add a Post
        </Link>
      </div>
    );
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

export default connect(null, { fetchPost: fetchPost }) (PostIndex);
