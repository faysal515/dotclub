import styled, { css } from 'styled-components'

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  
  ${props => props.selected && css`
    background: palevioletred;
    color: white;
  `}
`

export const TomatoButton = Button.extend`
  color: tomato;
  border-color: tomato;
`;


export const OrangeButton = Button.extend`
  color: tomato;
  border-color: orange;
`;

