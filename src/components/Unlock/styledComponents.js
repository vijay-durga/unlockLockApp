import styled from 'styled-components'

export const UnlockContainer = styled.div`
  background-image: linear-gradient(to bottom, #000000, #3c2940);
  height: 100vh;
  color: #ffffff;
  font-family: 'Roboto';
  display: flex;
  justify-content: center;
`
export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  height: 50px;
`
export const Text = styled.p`
  font: 20px;
  font-family: 'Roboto';
`

export const Button1 = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  background-color: #06b6d4;
  border: none;
  border-radius: 12px;
  margin-top: 90px;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 12px;
  padding-left: 24px;
  cursor: pointer;
  outline: none;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-top: 68px;
  }
`
