import styled from 'styled-components'
import Image from '../../imgs/img1.jpg'
import { pc, modile } from '../../responsive'
import { Link } from 'react-router-dom'
import { Menu, Close } from '@mui/icons-material'

type ExtendNavbar = {
  extendNavbar: boolean
}

export const NavbarContainer = styled.nav<ExtendNavbar>`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  position: relative;
  background: url(${Image}) center / cover;
  display: flex;
  flex-direction: column;
  ${pc({ height: '80px' })}
`

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`

export const NavbarLink = styled(Link)`
  color: black;
  font-size: 15px;
  font-weight: bold;
  font-family: sans-serif;
  text-decoration: none;
  padding: 10px;

  &:hover {
    background-color: rgba(255, 250, 205, 0.564);
    padding: 10px;
    border-radius: 60%;
  }

  ${modile({ display: 'none' })}
`

export const NavbarLinkExtended = styled(Link)`
  color: black;
  font-size: 1.7rem;
  font-family: sans-serif;
  text-decoration: none;
  padding: 10px;

  &:hover {
    background-color: rgba(255, 250, 205, 0.564);
    padding: 10px;
    border-radius: 60%;
  }
`

export const Logo = styled.div`
  margin: 10px;
  max-width: 180px;
  height: auto;

  align-items: center;
  font-family: cursive;
  font-weight: bold;
  font-size: 30px;
  text-shadow: 1px 0 0 #f9c158;
`

export const OpenLinksButton = styled.button`
  width: 30px;
  height: 25px;
  background: none;
  font-size: 25px;
  border: none;
  color: black;
  cursor: pointer;

  ${pc({ display: 'none' })}
`
export const MuiMenu = styled(Menu)``

export const MuiClose = styled(Close)``

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${pc({ display: 'none' })}
`
