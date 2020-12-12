import styled from 'styled-components'

export const Container = styled.div`
  width: 90px;
  height: 48px;
  border-radius: 50px;
  background-color: ${props => (props.theme.isDark ? '#272727' : 'black')};
  border: 4px solid ${props => (props.theme.isDark ? '#69696994' : '#3d3d3d')};
`

export const Switch = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  bottom: 5px;
  right: 5px;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${props => (props.isActive ? 100 : 0)}%);
  background: linear-gradient(35deg, #e8e8e8, #232323);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.link};
`
