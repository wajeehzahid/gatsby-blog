import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Us</h1>
    <p>Irure sunt elit magna nulla labore excepteur fugiat est nostrud do commodo sint. Id elit commodo dolor proident commodo esse commodo irure quis aliquip dolor elit tempor adipisicing. Ea proident laborum ea laborum do ullamco. Dolor eiusmod est ex Lorem ex in proident dolore sit.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default AboutPage
