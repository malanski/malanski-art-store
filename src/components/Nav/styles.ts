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
    transition: ease-out 800ms;
    text-transform: uppercase;
    font-weight: 600;
    flex-grow: 1;
    gap: 3.2rem;
    min-width: 140px;
    max-width: 25.6rem;

    text-decoration: none;
    padding: 0.1rem 0.4rem;
    background: ${(props) => props.theme.product['yellow-light']};
    color: ${(props) => props.theme.product.purpleDark};
  }

  a:hover {
    transition: ease-in 200ms;
    background: ${(props) => props.theme.product.purple};
    color: ${(props) => props.theme.product['yellow-light']};
  }
  a.active {
    background: ${(props) => props.theme.product.purpleGradient};
    color: ${(props) => props.theme.product['yellow-light']};
  }
  @media (max-width: 653px) {
    gap: 0.8rem;
    a {
      align-items: center;

      min-width: calc(25% - 0.8rem);
      font-size: 1.5rem;
      font-weight: 800;
      padding: 0.4rem 0.1rem;
    }
    svg {
      display: none;
    }
  }
  @media (max-width: 420px) {
    a {
      min-width: 60px;
      font-size: 1.2rem;
    }
    svg {
      display: none;
    }
  }
  @media (max-width: 350px) {
    a {
      min-width: 50px;
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
  @media (max-width: 653px) {
    gap: 0.2rem;
    padding: 0.1rem;
    justify-content: center;
  }
`
