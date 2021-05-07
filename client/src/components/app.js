import React from "react"
import Layout from './layout'
import Routes from './routes'
import {BrowserRouter as Router} from "react-router-dom";

import 'bootstrap/scss/bootstrap.scss'
import '../site-styles.scss'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes/>
      </Layout>
    </Router>
  );
}
