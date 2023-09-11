import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding: 3.2rem 16rem 1rem 16rem;
  flex-direction: column;
  align-items: center;
  display: flex;
  /* background: ${(props) => props.theme.base.background}; */
  gap: 3.2rem;
  max-width: 1640px;
  margin: auto;
  @media (max-width: 1290px) {
    padding: 3.2rem 3rem;
    gap: 1.6rem;
  }
  @media (max-width: 1150px) {
    padding: 3.2rem 2.5rem;
    gap: 1.4rem;
  }
  @media (max-width: 864px) {
    padding: 3.2rem 2rem;
    gap: 1.2rem;
  }
  @media (max-width: 650px) {
    padding: 3.2rem 1.6rem;
    gap: 1.1rem;
  }
  @media (max-width: 420px) {
    padding: 1rem 0.5rem;
    gap: 0.8rem;
  }
`
