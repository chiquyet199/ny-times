import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPosts } from 'actions/posts'
import Post from 'components/Post'

class PostList extends React.Component {
  constructor(props) {
    super(props)
  }

  onClickHandler = () => {
    this.props.getPosts()
  }

  render() {
    console.log(1)
    const { data } = this.props
    return (
      <div>
        <button onClick={this.xxx}>123</button>
        {data.map(item => {
          return <Post clickHandler={this.onClickHandler} key={item._id} {...item} />
        })}
      </div>
    )
  }
}

PostList.propTypes = {
  data: PropTypes.array,
  getPosts: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
  }
}

export default connect(null, mapDispatchToProps)(PostList)
