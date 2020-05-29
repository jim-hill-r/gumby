import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"

export default function Home() {
  return (
    <Layout>
      <div style={{ color: `purple` }}>
        <Link to="/about/">About</Link>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </Layout>
  );
}
