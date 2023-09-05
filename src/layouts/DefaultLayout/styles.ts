import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding: 3.2rem 16rem;
  flex-direction: column;
  align-items: center;
  display: flex;
  background: ${(props) => props.theme.base.background};
  gap: 3.2rem;

  @media (max-width: 1232px) {
    padding: 3.2rem 4rem;
    gap: 1.6rem;
  }
  @media (max-width: 390px) {
    padding: 1rem 2rem;
    gap: 0.8rem;
  }
`
