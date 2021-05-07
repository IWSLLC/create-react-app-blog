import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './about'
import Users from './users'
import Home from './home'

export default function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}
