import { useState } from 'react'
import { navItems } from '../../data/data'
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  MuiMenu,
  MuiClose,
} from './style'

const Header = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo>swiit</Logo>
        </LeftContainer>

        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/product">商品一覧</NavbarLink>
            <NavbarLink to="/inquiry">お問い合せ</NavbarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr)
              }}
            >
              {extendNavbar ? <MuiClose /> : <MuiMenu />}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar &&
        navItems.map((item, key) => (
          <NavbarExtendedContainer key={key}>
            <NavbarLinkExtended to={item.link}>{item.title}</NavbarLinkExtended>
          </NavbarExtendedContainer>
        ))}
    </NavbarContainer>
  )
}

export default Header
