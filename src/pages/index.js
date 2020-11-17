import React from "react"
import { graphql } from "gatsby"
import { Jumbotron } from "react-bootstrap"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import "./index.css"
import SEO from "../components/seo"
import { Row, Col, Button, Image } from "react-bootstrap"
import MyPhoto from "../../static/images/shu.jpg"
export default ({ data }) => (
  <Layout>
    <SEO title="welcome" />
    <div className="about">
      <Container>
        <Jumbotron>
          <h1 className="text-h1">I'm frontend developer and traveler</h1>
          <p className="text-p">
            I've visited different countries, I've learned a lot of culture and
            traditions, and I've had a lot of experience. When I volunteered in
            Cambodia, I met local children and learned various things and
            learned how important it is to take on challenges. So I decided to
            continue to challenge When I volunteered in Cambodia, I met local
            children and learned various things and learned how important it is
            to take on challenges.So I decided to continue to challenge
          </p>
        </Jumbotron>
      </Container>
    </div>
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  src={MyPhoto}
                  thumbnail
                  fluid
                />{" "}
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                <strong>&nbsp;Hi there! I am Shu Tanoue</strong>
                <br /> Well-trained junior web developer able to design and
                develop websites using the latest programming languages.
                Constantly strives to better manage technology and development
                projects. Takes action and initiative in team work.
                <br />
                <br />
                <strong>&nbsp;MAIN SKILLS</strong>
                <br />
                HTML, CSS, JavaScript, PHP, GitHub, React,WordPress
                <br />
                <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1h4tsoeJ9sbPZn4tKiCaBQhxa2QUqV2ST/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/shu-tanoue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/shuichiro-tanoue-863899198/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href=" https://www.instagram.com/shu_frontend/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-danger">
                        Instagram
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mail-text">
        <h1>traveler.shu1234@gmail.com</h1>
      </div>
    </div>
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
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`
