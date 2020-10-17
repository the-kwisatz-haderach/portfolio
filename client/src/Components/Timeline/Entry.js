import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 2.7em;
  border: 1px solid #0000001f;
  border-radius: 3px;
  box-shadow: 3px 3px 14px 3px #0000000d;
  position: relative;
  background-color: white;
`

const TextContainer = styled.div`
  padding: 0 20px;
`
const Logo = styled.img`
  width: 50px;
  height: 50px;
`

const Title = styled.h3`
  margin: 0;
  font-size: 1.4em;
  margin-bottom: 0.4em;
`

const SubTitle = styled.p`
  color: #737373;
  font-size: 0.9em;
  margin-bottom: 1em;
`

export const Header = styled.div`
  display: flex;
`

const Description = styled.p`
  max-height: 4em;
  display: inline-block;
  position: relative;
`

const CompanyLink = styled.a`
  color: #737373;
  text-decoration: none;
  margin-right: 8px;
  &:hover {
    text-decoration: none;
  }
  &::before {
    content: '\f0c1';
    font-weight: 600;
    margin-right: 6px;
    font-family: 'Font Awesome 5 Free';
  }
`

const Location = styled.span`
  &::before {
    content: '\f3c5';
    font-weight: 600;
    margin-right: 6px;
    font-family: 'Font Awesome 5 Free';
  }
`

const Entry = ({ title, subtitle, description, location, logo, link }) => (
  <Container>
    <Header>
      <Logo src={logo} />
      <TextContainer>
        <Title>{title}</Title>
        <SubTitle>
          <CompanyLink href={link} target="_blank" rel="noopener noreferrer">
            {subtitle} |
          </CompanyLink>
          <Location>{location}</Location>
        </SubTitle>
      </TextContainer>
    </Header>
    <Description>{description}</Description>
  </Container>
)

Entry.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  logo: PropTypes.node,
  link: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string
}

export default Entry
