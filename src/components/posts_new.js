import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { createPost } from '../actions/index';

class PostsNew extends Component {

  render() {
    const { handleSubmit } = this.props; // const handleSubmit = this.props.handleSubmit
    const { fields: {title, categories, content} } = this.props; // const title = this.props.fields.title

    return (
      <form onSubmit={ this.props.handleSubmit(this.props.createPost) } >
        <h3>Create a New Post</h3>

        <div className="form-group" >
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group" >
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group" >
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    );
  }
}

// on reduxForm we configure the form
// It will ingect some properties on this.props
// reduxForm is used in the same way as we used connect to convert
//  the commponent into a Container.
// reduxForm receive 3 parameters (ConfigurationObject, mapStateToProps, accionCreators)
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, {createPost} )(PostsNew);
