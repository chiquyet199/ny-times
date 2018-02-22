import { GET_POSTS_SUCCESS } from 'actions/posts'

const initialState = [
  // {
  //   _id: 123,
  //   snippet: 'This is snippet',
  //   pub_date: '13 Feb 2018',
  //   source: 'this is source',
  //   multimedia: [
  //     {
  //       url: 'string',
  //       format: 'string',
  //       height: 100,
  //       width: 100,
  //       type: 'video',
  //       subtype: 'string',
  //       caption: 'string',
  //       copyright: 'string',
  //     },
  //   ],
  // },
]
let actionHandlers = {}

actionHandlers[GET_POSTS_SUCCESS] = (state, posts) => {
  return posts.map(post => {
    const { _id, snippet, pub_date, source, multimedia } = post
    return {
      _id,
      snippet,
      pub_date,
      source,
      multimedia,
    }
  })
}

export default (state = initialState, action) => {
  var handler = actionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
