import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 1.2rem;
  a {
    font-size: 1.4rem;
    border-radius: 0.6rem;
    transition: all ease-in-out 600ms;
    text-transform: uppercase;
    font-weight: 600;
    min-width: 140px;
    text-decoration: none;
    padding: 0.1rem 0.4rem;
    background: ${(props) => props.theme.product['yellow-light']};
    color: ${(props) => props.theme.product['yellow-dark']};
  }

  a:hover {
    background: ${(props) => props.theme.product.yellow};
    color: ${(props) => props.theme.product['yellow-light']};
  }
  a.active {
    background: ${(props) => props.theme.product.yellow};
    color: ${(props) => props.theme.product['yellow-light']};
  }
  @media (max-width: 506px) {
    gap: 0.8rem;
    a {
      min-width: 60px;
      font-size: 1.5rem;
      font-weight: 800;
      padding: 0.8rem 0.2rem;
    }
    svg {
      display: none;
    }
  }
  @media (max-width: 420px) {
    a {
      min-width: 60px;
      font-size: 1.3rem;
    }
    svg {
      display: none;
    }
  }
`

export const NavButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.8rem;
  gap: 0.4rem;
  border: none;
  @media (max-width: 700px) {
    padding: 0.2rem;
  }
  @media (max-width: 506px) {
    gap: 0.2rem;
    padding: 0.1rem;
    justify-content: center;
  }
`
