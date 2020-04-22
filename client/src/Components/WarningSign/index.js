import React from 'react'
import styled from 'styled-components'
import PropTypes from './node_modules/prop-types'
import './style.scss'

const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  padding: ${(props) => (props.color === 'red' ? '25px' : '30px 40px')};
  border-radius: ${(props) => (props.color === 'red' ? '2' : '10')}px;
  background-image: linear-gradient(
      to bottom,
      ${(props) =>
        props.color === 'red' ? '#ed462fe6,#ed462fbd' : '#ffe500db,#f7e632e6'}
    ),
    url('http://2.bp.blogspot.com/-LmJzgd-qT9Q/UFwYiaxcTcI/AAAAAAAACOw/vjXLznPSNeA/s1600/Tileable+eroded+scratch+metal+texture+background+07.jpg');
  color: ${(props) => (props.color === 'red' ? 'white' : 'black')};
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: ${(props) => (props.color === 'red' ? 'row' : 'column')};
  &:before {
    content: '';
    position: absolute;
    top: 4px;
    left: ${(props) => (props.color === 'red' ? '7' : '5')}px;
    width: ${(props) => (props.color === 'red' ? '92' : '92')}%;
    height: ${(props) => (props.color === 'red' ? '86' : '92')}%;
    border: 3px solid ${(props) => (props.color === 'red' ? 'white' : 'black')};
    border-radius: ${(props) => (props.color === 'red' ? '2px' : '6px')};
  }
  @media only screen and (min-width: 768px) {
    padding: ${(props) => (props.color === 'red' ? '35px 45px' : '30px 40px')};
    &:before {
      top: 6px;
      left: ${(props) => (props.color === 'red' ? '8' : '5')}px;
      width: ${(props) => (props.color === 'red' ? '94' : '92')}%;
      height: ${(props) => (props.color === 'red' ? '88' : '92')}%;
    }
  }
`
const MessageContainer = styled.div`
  display: ${(props) => (props.color === 'red' ? 'inline-flex' : 'inline')};
  flex: ${(props) => (props.color === 'red' ? 2 : 0)};
  flex-flow: row wrap;
  justify-content: center;
`

const WarningTitle = styled.h4`
  margin-bottom: 0;
  margin-top: 10px;
  width: 100%;
  font-size: 20px;
  letter-spacing: 2px;
  color: ${(props) => (props.color === 'red' ? 'red' : '')};
  background-color: ${(props) => (props.color === 'red' ? 'white' : '')};
  border-radius: ${(props) => (props.color === 'red' ? '10px' : '')};
  @media only screen and (min-width: 768px) {
    font-size: 26px;
  }
`

const WarningText = styled.p`
  margin: 0;
  margin-top: ${(props) => (props.hasChildren ? '6' : '0')}px;
  font-size: 0.7em;
  padding: 3px 6px;
  color: white;
  background-color: ${(props) =>
    props.hasChildren && props.color !== 'red' ? 'black' : ''};
  border-radius: ${(props) => (props.color === 'red' ? '' : '10px')};
  @media only screen and (min-width: 768px) {
    font-size: 0.9em;
  }
`

const WarningIcon = styled.i`
  font-size: 50px;
  flex: 1.7;
  @media only screen and (min-width: 768px) {
    font-size: 80px;
  }
`

const defTitle = 'default title'
const defChildren = ''
const defColor = 'yellow'
const defIconClass = 'fas fa-skull-crossbones'

const WarningSign = ({
  title = defTitle,
  children = defChildren,
  color = defColor,
  iconClass = defIconClass,
}) => {
  return (
    <Container color={color}>
      <WarningIcon className={iconClass} color={color} />
      <MessageContainer color={color}>
        <WarningTitle color={color}>{title}</WarningTitle>
        <WarningText hasChildren={!!children} color={color}>
          {children}
        </WarningText>
      </MessageContainer>
    </Container>
  )
}

WarningSign.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  color: PropTypes.string,
  iconClass: PropTypes.string,
}

export default WarningSign
