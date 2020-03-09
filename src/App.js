import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Auth from './Pages/auth'
import Event from './Pages/Event'
import Booking from './Pages/Booking'
import Nav from './Components/Nav'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Redirect from="/" to="/auth" exact/>
        <Route path="/auth" component={Auth} />
        <Route path="/events" component={Event} />
        <Route path="/bookings" component={Booking} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
