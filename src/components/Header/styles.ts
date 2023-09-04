import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 16rem;
  width: 100%;
  img {
    width: 8.5rem;
    height: 4rem;
    filter: invert();
  }

  @media (max-width: 76rem) {
    padding: 3.2rem 3rem;

  }
  @media (max-width: 475px) {
    padding: 1rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }
`
