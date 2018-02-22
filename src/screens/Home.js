import React from 'react'
import { connect } from 'react-redux'
import PostList from 'components/PostList'
import { getPosts } from 'actions/posts'

class Home extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }

  componentWillReceiveProps(props) {
    this.setState({ posts: props.posts })
  }

  render() {
    const { posts } = this.props
    return <PostList posts={posts} />
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
