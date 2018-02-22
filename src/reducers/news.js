import { FETCH_NEW } from 'actions/news'

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
  {
    id: 124,
    title: 'post2',
    content: '123xxx123',
  },
]
let newsActionHandlers = {}

newsActionHandlers[FETCH_NEW] = (state, payload) => {
  return payload
}

export default (state = initialState, action) => {
  var handler = newsActionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
