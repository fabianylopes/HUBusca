import styled from "styled-components";

const Container = styled.div`
  background-color: #2b3566;
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  img {
    width: 140px;
    height: 140px;
    border: 4px solid #644aff;
    border-radius: 50%;
  }
`

const Local = styled.p`
  display: flex;
  align-items: center;

  svg {
    fill: #4ed8c7;
    font-size: 24px; 
  }

  span {
    color: #9da5d1;
    font-weight: 700;
  }
`

export { Container, Local }