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
    margin-top: 32px;
  }
  h4 {
    width: 100%;
    font-size: 2.5rem;
    text-align: center;
  }
  p {
    font-size: 1.8rem;
    padding: 0.8rem;
  }
`
export const AboutCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    width: 50%;
  }
  a {
    color: white;
    text-decoration: underline;
  }
`
