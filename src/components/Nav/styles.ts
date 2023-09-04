import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 3.2rem 16rem; */
  width: 100%;
  a {
    border-radius: 0.6rem;
    transition: all ease-in-out 600ms;
    text-transform: uppercase;
    font-weight: 600;
    min-width: 110px;
    text-decoration: none;
    background: ${(props) => props.theme.product['yellow-light']};
    color: ${(props) => props.theme.product['yellow-dark']};
  }

  a:hover {
    background: ${(props) => props.theme.product['yellow']};
    color: ${(props) => props.theme.product['yellow-light']};
  }
  a.active {
    background: ${(props) => props.theme.product['yellow']};
    color: ${(props) => props.theme.product['yellow-light']};
  }
  @media (max-width: 800px) {
    padding: 3.2rem 3rem;

  }
  @media (max-width: 626px) {
    padding: 1.6rem 1.5rem;
    gap: 0.8rem;
    a {
      width: 60px;
    }
    svg {
      display: none;
    }
  }
  @media (max-width: 496px) {
    padding: 0.8rem 0.8rem;
    /* flex-direction: column; */
    align-items: center;
    flex-wrap: wrap;
    gap: 0.4rem;

  }
`

export const NavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 0.4rem;
  font-size: 1.4rem;
  border: none;
  @media (max-width: 700px) {
    padding: 0.2rem;
  }
  @media (max-width: 620px) {
    gap: 0.2rem;
    padding: 0.1rem;
    font-size: 1.6rem;

  }

 `