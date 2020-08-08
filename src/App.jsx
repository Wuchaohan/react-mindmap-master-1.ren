import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Mindmap from './component/mindmap'
import './App.css'
import HomePage from './component/homepage/HomePage'
import QRoomDashBoard from './component/QRoom/QRoomDashBoard/QRoomDashBoard'

// function App() {
//   return <Mindmap />;
// }

class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={HomePage} />
                <Route path="/mindmap" component={Mindmap} />
                <Route path="/QuestionRoom" component={QRoomDashBoard} />
            </Fragment>
        )
    }
}

export default App
