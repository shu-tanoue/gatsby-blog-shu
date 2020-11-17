import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import SEO from "../components/seo"
export default ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <Container>
      <h1>Shu Blog</h1>
      <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Col lg={4} key={node.id}>
            <Card>
              <Img
                fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                alt={node.frontmatter.title}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>{node.frontmatter.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {node.frontmatter.data}
                </Card.Subtitle>
                <Card.Text>
                  <p>{node.excerpt}</p>
                </Card.Text>
                <Button variant="primary" href={node.fields.slug}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      edges {
        node {
          id
          base
          accessTime(fromNow: true)
        }
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___data, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            data(formatString: "MMMM DD, YYYY")
          }
          id
          excerpt(pruneLength: 150)
        }
      }
    }
  }
`
