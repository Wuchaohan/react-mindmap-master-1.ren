import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import QRoomList from '../QRoomList/QRoomList'
import QRoomForm from '../QRoomForm/QRoomForm'
import cuid from 'cuid'

const mapState = (state) => ({
    events: state.events,
})

class QRoomDashboard extends Component {
    state = {
        isOpen: false,
        selectedEvent: null,
    }
    // handleIsOpenToggle = () => {
    //   this.setState(({ isOpen }) => ({
    //     isOpen: !isOpen,
    //   }));
    // };
    handleCreateFormOpen = () => {
        this.setState({
            isOpen: true,
            selectedEvent: null,
        })
    }
    handleFormCancel = () => {
        this.setState({
            isOpen: false,
        })
    }
    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid()
        newEvent.hostPhotoURL = 'assets/user.png'
        this.setState(({ events }) => ({
            events: [...events, newEvent],
            isOpen: false,
        }))
    }
    handleSelectEvent = (evt, event) => {
        console.log(evt)
        console.log(event)
        this.setState({
            selectedEvent: event,
            isOpen: true,
        })
    }

    handleUpdateEvent = (updateEvent) => {
        this.setState(({ events }) => ({
            events: events.map((event) => {
                if (event.id === updateEvent.id) {
                    return { ...updateEvent }
                } else {
                    return event
                }
            }),
            isOpen: false,
            selectedEvent: null,
        }))
    }

    handleDeleteEvent = (id) => {
        this.setState(({ events }) => ({
            events: events.filter((e) => e.id !== id),
        }))
    }
    render() {
        const { isOpen, selectedEvent } = this.state
        const { events } = this.props
        return (
            <Grid>
                <Grid.Column width={10}>
                    <QRoomList events={events} selectEvent={this.handleSelectEvent} deleteEvent={this.handleDeleteEvent} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button onClick={this.handleCreateFormOpen} positive content="Create Event" />
                    {isOpen && <QRoomForm key={selectedEvent ? selectedEvent.id : 0} updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} cancelFormOpen={this.handleFormCancel} />}
                </Grid.Column>
            </Grid>
        )
    }
}

export default QRoomDashboard
