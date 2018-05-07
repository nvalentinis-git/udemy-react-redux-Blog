import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions/index';

class PostsNew extends Component {

  // This is used to get the router Component from parent Componnet
  // and set is onto the context
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(propsForm) {
    this.props.createPost(propsForm)
      .then(() => {
          // promise was resolved and we should navigate
          this.context.router.push('/');
      });
  }

  render() {
    const { handleSubmit } = this.props; // const handleSubmit = this.props.handleSubmit
    const { fields: {title, categories, content} } = this.props; // const title = this.props.fields.title

    return (
      <form onSubmit={ this.props.handleSubmit(this.onSubmit.bind(this)) } >
        <h3>Create a New Post</h3>

        <div className={ `form-group ${title.touched && title.invalid ? 'has-danger':''}` } >
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={ `form-group ${categories.touched && categories.invalid ? 'has-danger':''}` } >
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={ `form-group ${content.touched && content.invalid ? 'has-danger':''}` } >
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>

      </form>
    );
  }
}

function validate(values) {
  const error = {};

  if (!values.title) {
    error.title = "Enter a username";
  }

  if (!values.categories) {
    error.categories = "Enter a Categories";
  }

  if (!values.content) {
    error.content = "Enter a Content";
  }

  return error;
}

// on reduxForm we configure the form
// It will ingect some properties on this.props
// reduxForm is used in the same way as we used connect to convert
//  the commponent into a Container.
// reduxForm receive 3 parameters (ConfigurationObject, mapStateToProps, accionCreators)
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost} )(PostsNew);
