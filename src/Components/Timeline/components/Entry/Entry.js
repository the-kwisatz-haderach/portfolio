import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Header,
  Description,
  Logo,
  TextContainer,
  Title,
  SubTitle,
  CompanyLink,
  Location
} from './style'

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
