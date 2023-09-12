import styled from 'styled-components'

export const AboutStyles = styled.div`
  h2,
  h4,
  p {
    color: white;
  }
  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    text-transform: uppercase;
    margin: 3.2rem;
  }
  h4 {
    width: 100%;
    font-size: 2.5rem;
    text-align: center;
    margin: 1.6rem;
  }
`
export const AboutCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-grow: 2;
  p {
    font-size: 1.8rem;
    padding: 3.2rem 1.6rem;
    background: ${(props) => props.theme.base['base-card']};
    border-radius: 6px 36px 6px 36px;
    text-align: justify;
    width: 45%;
    height: 100%;
  }
  a {
    color: white;
    text-decoration: underline;
  }
  @media (max-width: 950px) {
    flex-direction: column-reverse;
    width: 100%;
    p {
      width: 90%;

      margin: 2rem;
    }
  }
`
