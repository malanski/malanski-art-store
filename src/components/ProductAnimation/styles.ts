import styled from 'styled-components'

export const ImageCarrousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* max-width: calc(568px - 3.2rem); */
  max-width: 45%;
  gap: 3.2rem;
  border: 2px solid white;
  border-radius: 6px 36px 6px 36px;

  img {
    /* animation-play-state: paused; */
    margin: 1rem;
    max-width: 65%;
    margin: 0 auto;
  }

  button {
    height: 100%;
    background: grey;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 50%;
    border-color: transparent;
    background: ${(props) => props.theme.base['base-card']};
    &:hover {
    }
  }

  @media (max-width: 950px) {
    max-width: 90%;
    margin-bottom: 3.2rem;

    img {
      width: 50%;
    }
  }
  @media (max-width: 575px) {
    max-width: 90%;
    margin-bottom: 3.2rem;

    img {
      width: 60%;
    }
  }
`
