import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from 'actions/posts'
import Loading from 'components/Loading'
import PostList from 'components/PostList'

export class Home extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props
    return <div>{posts.length > 0 ? <PostList posts={posts} /> : <Loading />}</div>
  }
}

Home.propTypes = {
  getPosts: PropTypes.func,
}

Home.defaultProps = {
  getPosts: () => {},
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
