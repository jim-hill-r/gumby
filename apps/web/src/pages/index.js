import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layouts/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div style={{ color: `purple` }}>
        <Link to="/about/">About {data.site.siteMetadata.title} </Link>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </Layout>
  );
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
