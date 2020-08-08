import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

class QRoomForm extends Component {
    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: '',
    }

    componentDidMount() {
        if (this.props.selectedEvent !== null) {
            this.setState({
                ...this.props.selectedEvent,
            })
        }
    }

    handleFormSubmit = (evt) => {
        evt.preventDefault()
        if (this.state.id) {
            this.props.updateEvent(this.state)
        } else {
            this.props.createEvent(this.state)
        }
    }

    handleInputChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
        })
    }
    render() {
        const { cancelFormOpen } = this.props
        const { title, date, city, venue, hostedBy } = this.state
        return (
            <Segment>
                <Form onSubmit={this.handleFormSubmit} autoComplete="off">
                    <Form.Field>
                        <label>Question</label>
                        <input name="Question" onChange={this.handleInputChange} value={title} placeholder="Enter the Question" />
                    </Form.Field>


                    <Form.Field>
                        <label>Answer</label>
                        <input name="Answer" onChange={this.handleInputChange} value={venue} placeholder="Enter the Answer" />
                    </Form.Field>

                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button onClick={cancelFormOpen} type="button">
                        Cancel
                    </Button>
                </Form>
            </Segment>
        )
    }
}
export default QRoomForm
