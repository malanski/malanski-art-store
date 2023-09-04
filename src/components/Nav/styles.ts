import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 16rem;
  width: 100%;
  a {
    border-radius: 0.6rem;
    transition: all ease-in-out 600ms;
    text-transform: uppercase;
    font-weight: 600;
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
  @media (max-width: 76rem) {
    padding: 3.2rem 3rem;

  }
  @media (max-width: 460px) {
    padding: 3.2rem 3rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
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


 `