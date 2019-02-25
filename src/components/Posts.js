import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

class Posts extends Component {

componentWillMount(){
  this.props.fetchPosts();
}

componentWillReceiveProps(nextProps){
  if(nextProps.newPost){
    this.props.posts.unshift(nextProps.newPost)
  }
}

render() {
      const postItems  = this.props.posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
      ))
    return (
      <div>
        <h1>This is the Posts component</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypse = {
  fetchPosts: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newpost: state.posts.item
});

export default connect(mapStateToProps, {fetchPosts})(Posts);