import { GET_POSTS_SUCCESS } from 'actions/posts'

const initialState = [
  {
    _id: 123,
    snippet: 'This is snippet',
    pub_date: '13 Feb 2018',
    source: 'this is source',
    multimedia: [
      {
        url: 'string',
        format: 'string',
        height: 100,
        width: 100,
        type: 'video',
        subtype: 'string',
        caption: 'string',
        copyright: 'string',
      },
    ],
  },
]
let newsActionHandlers = {}

newsActionHandlers[GET_POSTS_SUCCESS] = (state, payload) => {
  return payload
}

export default (state = initialState, action) => {
  var handler = newsActionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
