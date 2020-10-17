import styled from 'styled-components'
import { Header } from './Entry'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  position: relative;
`

export const Line = styled.span`
  width: 4px;
  height: 100%;
  background-color: #0000001f;
  position: absolute;
  top: 0;
  z-index: 1;
  left: calc(50% - 2px);
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: calc(50% - 15px);
    width: 30px;
    height: 5px;
    background-color: #0000001f;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: calc(50% - 15px);
    width: 30px;
    height: 5px;
    background-color: #0000001f;
  }
`

export const ConnectingLine = styled.div`
  position: absolute;
  top: calc(50% - 2px);
  right: -50px;
  left: unset;
  z-index: -1;
  height: 50%;
  border-top: 4px solid #0000000d;
  width: 0px;
  transform-origin: right;
`

export const SkillsList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

export const TimelineColumn = styled.div`
  position: relative;
  flex: 1;
  text-align: justify;
  &:nth-child(2) {
    flex: none;
    width: 100px;
    margin: 0 50px;
  }
`

export const TimelineRow = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 0;
  margin-bottom: 1em;
`

export const TimeLineContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7em ${props => props.theme.padding.horizontal.low};
  &:first-of-type {
    margin-top: 70px;
  }
  &:last-of-type {
    margin-bottom: 70px;
  }
  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.grey};
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
    }
    & ${TimelineColumn} {
      & img {
        order: 1;
      }
    }
  }
`

export const TimelineStart = styled.div`
  width: 100%;
  text-align: center;
  position: sticky;
  top: 55%;
  z-index: 1;
`

export const TimelineSticky = styled.i`
  font-size: 5em;
  position: relative;
  top: 8px;
`
