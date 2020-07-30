
import styled from "styled-components";

const Button = styled.button`

color: var(--logo);
  border: 3px solid var(--logo);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .5s;


&:hover{
color: var(--white);
  border: 3px solid var(--white);
  box-sizing: border-box;
}

&:focus {
  opacity: .5;
}


`;

export default Button;