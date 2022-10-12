import { css } from 'styled-components'

export const modile = (props: any) => {
  return css`
    @media only screen and (max-width: 700px) {
      ${props}
    }
  `
}

export const pc = (props: any) => {
  return css`
    @media only screen and (min-width: 700px) {
      ${props}
    }
  `
}
