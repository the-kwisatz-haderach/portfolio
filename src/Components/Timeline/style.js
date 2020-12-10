import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  position: relative;
`

export const Line = styled.span`
  display: none;
  width: 2px;
  height: 100%;
  background-color: ${props => props.theme.colors.foundationDetail};
  position: absolute;
  top: 0;
  z-index: 0;
  left: 50px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    width: 20px;
    height: 3px;
    background-color: ${props => props.theme.colors.foundationDetail};
  }
  &::before {
    top: -3px;
  }
  &::after {
    bottom: -3px;
  }
  @media only screen and (min-width: 1024px) {
    display: block;
    left: calc(50% - 2px);
    width: 5px;
    &::before,
    &::after {
      left: calc(50% - 15px);
      width: 30px;
      height: 5px;
    }
    &::before {
      top: -5px;
    }
    &::after {
      bottom: -5px;
    }
  }
`

export const TimelineStart = styled.div`
  display: none;
  text-align: center;
  width: 100%;
  position: sticky;
  top: 55%;
  pointer-events: none;
  z-index: 1;
  @media only screen and (min-width: 1024px) {
    display: block;
  }
`

export const TimelineSticky = styled.i`
  position: relative;
  top: 8px;
  @media only screen and (min-width: 1024px) {
    left: 0;
    font-size: 4em;
  }
`
