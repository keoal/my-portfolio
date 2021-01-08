import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Layout = loadable(() => import('../components/layout'))

const Image = styled.img`
  max-height: 220px;
  max-width: 180px;
  object-fit: cover;
  object-position: center center;
  border-radius: 3px;
  box-shadow: 5px 5px 13px 0px rgba(0,0,0,0.51);
`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;
  text-align: center;

  ${({ href }) => href && css`
    &:hover ${Image}{
      transition: transform .5s;
      transform: translateY(-5px);
    }
  `}
`

const Portifolio = ({ className, location }) => {
  const title = "Portfolio"
  const { keywords, portifolio } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={title}
        keywords={keywords}
      />

      <Hero
        heroImg={withPrefix('/images/background.jpg')}
        title={title}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            {portifolio.map(job => (
              <Col
                key={job.description}
                align="center"
              >
                <JobCard
                  as={job.url ? "a" : "div"}
                  href={job.url}
                  target="_blank"
                >
                  <Image src={withPrefix(job.image)} />
                  <p>{job.description}</p>
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Portifolio)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

`
