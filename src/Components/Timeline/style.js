import styled from 'styled-components'
import { Header } from './Entry'

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
  background-color: #0000001f;
  position: absolute;
  top: 0;
  z-index: 1;
  left: 50px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    width: 20px;
    height: 3px;
    background-color: #0000001f;
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

export const ConnectingLine = styled.div`
  display: none;
  position: absolute;
  top: calc(50% - 2px);
  right: -50px;
  left: unset;
  z-index: -1;
  height: 50%;
  border-top: 4px solid #0000001f;
  width: 0px;
  transform-origin: right;
  @media only screen and (min-width: 1024px) {
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
  @media only screen and (min-width: 425px) {
    margin-bottom: 1em;
    & > * {
      margin-bottom: 0;
    }
    flex-direction: row;
  }
  @media only screen and (min-width: 1024px) {
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
  @media only screen and (min-width: 768px) {
    &:not(:nth-child(2)) {
      padding: 2em;
    }
  }
  @media only screen and (min-width: 1024px) {
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
  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.grey};
  }
  @media only screen and (min-width: 1024px) {
    padding: 7em ${props => props.theme.padding.horizontal.low};
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
    }
    &:first-of-type {
      margin-top: 70px;
    }
    &:last-of-type {
      margin-bottom: 70px;
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
