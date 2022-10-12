import styled from 'styled-components'
import { pc } from '../../responsive'

export const Container = styled.div`
  height: 100%;
  background-color: #fff;
  margin: 6px;
  border: 4px solid gold;
`

export const Wrapper = styled.div`
  padding: 10px;
  font-family: sans-serif;
`
export const InfoH = styled.p`
  font-weight: 600;
`
export const InfoB = styled.p``

export const Contact = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

export const PhoneButton = styled.div`
  background-color: #faebd7;
  border: 1px solid orange;
  border-radius: 50px;
  box-shadow: 3px 2px 5px orange;
  padding: 4px 30px;
  margin: 20px;
  &:hover {
    opacity: 0.8;
  }

  /* pcサイズになると電話ボタンが消えます */
  ${pc({ display: 'none' })}
`

export const InquiryButton = styled.div`
  background-color: #faebd7;
  border: 1px solid orange;
  border-radius: 50px;
  box-shadow: 3px 2px 5px orange;
  padding: 4px 25px;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }
`

export const Inquiry = styled.div`
  cursor: pointer;
`
