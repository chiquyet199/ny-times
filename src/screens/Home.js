import React from 'react'
import { connect } from 'react-redux'
import PostList from 'components/PostList'

const Home = props => {
  const { posts } = props
  return <PostList data={posts} />
}

const mapStateToProps = ({ posts }) => {
  console.log(posts)
  return {
    posts,
  }
}

export default connect(mapStateToProps)(Home)
