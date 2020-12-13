import styled from 'styled-components'
import { Header, Container } from '../Entry/style'

export const DateMarker = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.colors.foundationDetail};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.foundation};
  @media screen and (min-width: 1024px) {
    clip-path: polygon(50% 100%, 100% 50%, 50% 0%, 0% 50%, 50% 100%);
    width: 100px;
    height: 100px;
  }
`

export const ConnectingLine = styled.div`
  display: none;
  position: absolute;
  top: calc(50% - 2px);
  right: -50px;
  left: unset;
  z-index: -1;
  height: 50%;
  border-top: 4px solid ${props => props.theme.colors.foundationDetail};
  width: 0px;
  transform-origin: right;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`

export const SkillsList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1.5em;
  & > * {
    margin-bottom: 1em;
  }
  @media screen and (min-width: 425px) {
    margin-bottom: 1em;
    & > * {
      margin-bottom: 0;
    }
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`

export const TimelineColumn = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  &:nth-child(2) {
    order: -1;
  }
  @media screen and (min-width: 768px) {
    &:not(:nth-child(2)) {
      padding: 2em;
    }
  }
  @media screen and (min-width: 1024px) {
    &:not(:nth-child(2)) {
      padding: 0;
    }
    &:nth-child(2) {
      order: 0;
      flex: none;
      width: 100px;
      margin: 0 50px;
    }
  }
`

export const TimelineRow = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 0;
  margin-bottom: 1em;
  @media screen and (min-width: 1024px) {
    flex-flow: row;
  }
`

export const TimeLineContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    &:nth-child(odd) {
      background-color: ${props => props.theme.colors.tertiaryFoundation};
    }
    padding: 7em 2em;
    & ${Container} {
      background-color: ${props => props.theme.colors.secondaryFoundation};
    }
    &:nth-child(odd) {
      & ${TimelineRow} {
        flex-direction: row-reverse;
      }
      & ${ConnectingLine} {
        left: -50px;
        right: unset;
        transform-origin: left;
      }
      & ${Header} {
        justify-content: flex-end;
        text-align: right;
      }
      & ${TimelineColumn} {
        & img {
          order: 1;
        }
      }
      & ${Container} {
        background-color: ${props => props.theme.colors.foundation};
      }
    }
    &:first-of-type {
      margin-top: 70px;
    }
    &:last-of-type {
      margin-bottom: 70px;
    }
  }
`
