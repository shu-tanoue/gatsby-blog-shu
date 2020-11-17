import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import SEO from "../components/seo"
import { Button } from "react-bootstrap"
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <p>
          <Img
            fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
            alt={post.frontmatter.title}
          />
        </p>
        <span>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </span>
      </Container>
      <Container className="text-center">
        <Button href="/blog" variant="outline-primary">
          Back
        </Button>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
