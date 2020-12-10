import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  animation-delay: ${props => 1 + props.animationDelayFactor * 0.4}s;
  @media only screen and (min-width: 425px) {
    flex-flow: column wrap;
  }
  @media only screen and (min-width: 1024px) {
    text-align: center;
  }
`

export const Icon = styled.i`
  font-size: 1.2em;
  margin-right: 0.4em;
  @media only screen and (min-width: 425px) {
    margin-right: 0;
    margin-bottom: 0.2em;
    font-size: 2.2em;
  }
  @media only screen and (min-width: 768px) {
    font-size: 3.2em;
  }
`

export const Name = styled.p`
  font-weight: 600;
  font-size: 0.6em;
  @media only screen and (min-width: 768px) {
    font-size: 0.9em;
  }
`
