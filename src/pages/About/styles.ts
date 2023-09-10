import styled from 'styled-components'

export const AboutStyles = styled.div`
  h2,
  h4,
  p {
    color: white;
  }
  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    margin: 32px;
  }
  h4 {
    width: 100%;
    font-size: 2.5rem;
    text-align: center;
  }
  p {
    font-size: 1.8rem;
    padding: 1rem;
    background: ${(props) => props.theme.base['base-card']};
    border-radius: 8px;
    text-align: justify;
  }
`
export const AboutCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    width: 50%;
    /* animation-play-state: paused; */
    margin: 1rem;
  }
  a {
    color: white;
    text-decoration: underline;
  }
  @media (max-width: 650px) {
    flex-direction: column-reverse;
    img {
      width: 70%;
    }
  }
`
