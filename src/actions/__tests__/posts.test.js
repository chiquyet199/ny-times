import axios from 'axios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter'
import { API_KEY } from 'configs/common'
import {
  getPosts,
  setActivePost,
  clearActivePost,
  SET_ACTIVE_POST,
  CLEAR_ACTIVE_POST,
  GET_POSTS_SUCCESS,
} from '../posts'

var mock = new MockAdapter(axios)
const data = { response: { docs: [] } }
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const today = new Date()
const currentMonth = today.getMonth() + 1
const currentYear = today.getFullYear()
const url = `archive/v1/${currentYear}/${currentMonth}.json`
mock.onGet(`${url}?api-key=${API_KEY}`).reply(200, data)

const store = mockStore({ data: [], activePost: null })
describe('>>>A C T I O N --- Test active-post action', () => {
  it('calls request and success actions if the fetch response was successful', () => {
    return store.dispatch(getPosts()).then(resx => {
      const expectedActions = store.getActions()
      expect(expectedActions.length).toBe(1)
      expect(expectedActions).toContainEqual({ type: GET_POSTS_SUCCESS, payload: [] })
    })
  })

  it('+++ actionCreator addInputs', () => {
    const action = setActivePost(1)
    expect(action).toEqual({ type: SET_ACTIVE_POST, payload: 1 })
  })

  it('+++ actionCreator clearActivePost', () => {
    const action = clearActivePost()
    expect(action).toEqual({ type: CLEAR_ACTIVE_POST })
  })
})
