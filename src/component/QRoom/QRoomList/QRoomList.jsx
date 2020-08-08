import React, { Component, Fragment } from 'react'
import QRoomListItem from './QRoomListItem'

class QRoomList extends Component {
    render() {
        const { events, selectEvent, deleteEvent } = this.props
        return <Fragment>{/* {events.map((event) => (
          <QRoomListItem
            key={event.id}
            event={event}
            selectEvent={selectEvent}
            deleteEvent={deleteEvent}
          />
        ))} */}</Fragment>
    }
}
export default QRoomList
