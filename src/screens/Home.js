import React from 'react'
import { connect } from 'react-redux'
import PostList from 'components/PostList'

const Home = props => {
  const { news } = props
  return <PostList data={news} />
}

const mapStateToProps = ({ news }) => {
  return {
    news,
  }
}

export default connect(mapStateToProps)(Home)
