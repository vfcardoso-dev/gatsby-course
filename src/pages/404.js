import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>Ops... Nada pra ver aqui.</p>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NotFoundPage
