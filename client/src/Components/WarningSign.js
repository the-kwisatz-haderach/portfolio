import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px 25px;
  border-radius: ${props => props.color === 'red' ? '2' : '10'}px;
  background-image:
    linear-gradient(to bottom, ${props => props.color === 'red' ? '#ed462fe6,#ed462fbd' : '#ffe500db,#f7e632e6'}),
    url('http://2.bp.blogspot.com/-LmJzgd-qT9Q/UFwYiaxcTcI/AAAAAAAACOw/vjXLznPSNeA/s1600/Tileable+eroded+scratch+metal+texture+background+07.jpg');
  color: ${props => props.color === 'red' ? 'white' : 'black'};
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: ${props => props.color === 'red' ? 'row' : 'column'};
  &:before {
    content: '';
    position: absolute;
    top: 3px;
    left: ${props => props.color === 'red' ? '0' : '3'}px;
    width: ${props => props.color === 'red' ? '97' : '94'}%;
    height: ${props => props.color === 'red' ? '90' : '94'}%;
    border: 2px solid ${props => props.color === 'red' ? 'white' : 'black'};
    border-radius: ${props => props.color === 'red' ? '2px' : '6px'};
  }
`
const MessageContainer = styled.div`
  display: inline-flex;
  flex: 2;
  flex-flow: row wrap;
  justify-content: center;
`

const WarningTitle = styled.h4`
  margin-bottom: 0;
  margin-top: 7px;
  width: 100%;
  padding: 6px 12px;
  color: ${props => props.color === 'red' ? 'red' : ''};
  background-color: ${props => props.color === 'red' ? 'white' : ''};
  border-radius: ${props => props.color === 'red' ? '10px' : ''};
`

const WarningText = styled.p`
  font-weight: 400;
  margin-top: ${props => props.margin ? '12' : '0'}px;
  margin-bottom: 0;
  font-size: 0.8em;
`

const WarningIcon = styled.i`
  font-size: 80px;
  flex: 1.7;
`

const defTitle = 'default title'
const defChildren = ''
const defColor = 'yellow'

const WarningSign = ({ title = defTitle, children = defChildren, color = defColor }) => {
  const iconClass = color === 'red' ? 'fa-skull-crossbones' : 'fa-exclamation-triangle'
  return (
    <Container color={color}>
      <WarningIcon className={`fas ${iconClass}`} color={color} />
      <MessageContainer color={color}>
        <WarningTitle color={color}>
          {title}
        </WarningTitle>
        <WarningText margin={!!children}>
          {children}
        </WarningText>
      </MessageContainer>
    </Container>
  )
}

export default WarningSign
