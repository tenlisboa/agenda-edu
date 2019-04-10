import React from 'react'
import { Provider } from 'react-redux'
import Events from '../components/Events'
import { store } from '../store'

import * as actions from '../actions/app'
import * as types from '../actions/app/types'
import reducer from '../reducers/app/eventsReducer'

import renderer from 'react-test-renderer'

test('Events renders correctly', () => {
  const container = () => (
    <Provider store={store}>
      <Events />
    </Provider>
  )
  const tree = renderer.create(container()).toJSON()
  expect(tree).toMatchSnapshot()
})

test('action of fetch events populate the store correctly', () => {
  const initialState = {
    busy: false,
    events: [],
    metadata: {},
    selectedEvent: {}
  }

  const events = {
    data: [
      {
        id: 1,
        title: 'Event 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',
        sendAt: '2019-10-06T11:28:19.688Z',
        image:
          'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
        startAt: '2019-10-14T10:40:36.036Z',
        location: 'Fake Street, 1001 - Fortaleza CE'
      },
      {
        id: 2,
        title: 'Event 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',
        sendAt: '2019-03-20T04:40:51.395Z',
        image:
          'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
        startAt: '2019-04-19T17:07:13.514Z',
        location: 'Fake Street, 1001 - Fortaleza CE'
      }
    ],
    metadata: {
      page: '1',
      limit: '10',
      pre_page: null,
      next_page: '11',
      total: 100,
      total_pages: 10
    }
  }

  expect(
    reducer(initialState, {
      type: types.SET_EVENTS,
      events
    })
  ).toEqual({
    busy: false,
    events: events.data,
    metadata: events.metadata,
    selectedEvent: {}
  })
})

test('action should select an event', () => {
  const initialState = {
    busy: false,
    events: [
      {
        id: 1,
        title: 'Event 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',
        sendAt: '2019-10-06T11:28:19.688Z',
        image:
          'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
        startAt: '2019-10-14T10:40:36.036Z',
        location: 'Fake Street, 1001 - Fortaleza CE'
      },
      {
        id: 2,
        title: 'Event 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',
        sendAt: '2019-03-20T04:40:51.395Z',
        image:
          'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
        startAt: '2019-04-19T17:07:13.514Z',
        location: 'Fake Street, 1001 - Fortaleza CE'
      }
    ],
    metadata: {},
    selectedEvent: {}
  }

  expect(
    reducer(initialState, {
      type: types.SELECT_EVENT,
      event: {
        id: 2,
        title: 'Event 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',
        sendAt: '2019-03-20T04:40:51.395Z',
        image:
          'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
        startAt: '2019-04-19T17:07:13.514Z',
        location: 'Fake Street, 1001 - Fortaleza CE'
      }
    })
  ).toEqual({
    busy: false,
    events: initialState.events,
    metadata: {},
    selectedEvent: {
      id: 2,
      title: 'Event 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.',
      sendAt: '2019-03-20T04:40:51.395Z',
      image:
        'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
      startAt: '2019-04-19T17:07:13.514Z',
      location: 'Fake Street, 1001 - Fortaleza CE'
    }
  })
})
