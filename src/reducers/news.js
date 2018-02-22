import { FETCH_NEW } from 'actions/news'

const initialState = [
  {
    id: 123,
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
    snippet: 'This is snippet',
    pub_date: '14 Feb 2018',
    source: 'this is source 2',
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

newsActionHandlers[FETCH_NEW] = (state, payload) => {
  return payload
}

export default (state = initialState, action) => {
  var handler = newsActionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
