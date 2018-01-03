import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby JS.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li>
          <Link
            key = {post.node.id}
            href={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const pageQuery = graphql `
  query IndexQuery{
    allMarkdownRemark (
      limit: 10
      filter: { frontmatter: { published: { eq:true} } }
    ){
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            published
          }
        }
      }
    }
  }
`

export default IndexPage
