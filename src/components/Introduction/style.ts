import styled from 'styled-components'
import { pc, modile } from '../../responsive'

// Introduction.tsx

export const Container = styled.div`
  ${pc({ display: 'flex' })}
`

export const Left = styled.div`
  font-family: sans-serif;
  background-color: #fff;
  border: 4px solid gold;
  margin: 6px;
`
export const ImgLeft = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const Image = styled.img`
  ${modile({ width: '100%' })}
  height: 300px;
  display: block;
  margin: 0 auto;
`
export const P = styled.p`
  line-height: 1.9;
  text-align: center;

  padding: 40px 15px 15px 15px;
`

// information.tsx

export const Right = styled.aside`
  font-family: sans-serif;
  background-color: #fff;
  border: 4px solid gold;
  margin: 6px;
  padding: 19px;
`

export const LocationMap = styled.div`
  width: 100%;
`

export const Map = styled.iframe`
  width: 100%;
  height: 300px;
  border: 2px solid orange;
  margin-bottom: 40px;
`

export const TableInfo = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  border: 1px solid orange;

  th,
  td {
    padding: 10px;
  }

  th {
    background-color: #faebd7;
    border-right: 1mm ridge orange;
  }

  td {
    white-space: pre-line;
  }
`
